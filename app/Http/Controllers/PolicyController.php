<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePolicyRequest;
use App\Http\Requests\UpdatePolicyReqest;
use App\Http\Resources\PolicyResource;
use App\Http\Resources\PolicySearchResource;
use App\Models\Contact;
use App\Models\Policy;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PolicyController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Policy::class, 'policy');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Policies/Index', [
            'filters' => $request->all('search', 'trashed'),
            'policies' => PolicySearchResource::collection(
                Policy::query()
                    ->select(['number', 'created_at', 'updated_at', 'premium', 'period_end', 'id'])
                    ->orderBy('policies.created_at')
                    ->with('contacts:name,id')
                    ->filter($request->only('search', 'trashed'))
                    ->paginate()
            )
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create(Request $request)
    {
        return Inertia::render('Policies/Create', [
            'contacts' => Inertia::lazy(
                fn() => Contact::orderBy('name')->filter($request->only('search', 'trashed'))
            ),
            'users' => User::all(['id', 'name'])
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreatePolicyRequest $request)
    {
        // dd($request['period_start']);
        $policy = Policy::create([
            'number' => $request['number'],
            'period_start' => new Carbon($request['period_start']),
            'period_end' => new Carbon($request['period_end']),
            'fields' => $request['fields'],
            'agent_id' => $request['agent_id'],
            'premium' => $request['premium']
        ]);

        $contacts = Arr::pluck($request['contacts'], 'id');
        $policy->contacts()->sync($contacts);

        return Redirect::to(route('policies'))->banner('Policy created');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Policy  $policy
     * @return \Inertia\Response
     */
    public function edit(Policy $policy)
    {
        return Inertia::render('Policies/Edit', [
            'policy' => PolicyResource::make($policy),
            'fields' => $policy->fields,
            'users' => User::all(['id', 'name']),
            'histories' => $policy->history
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Policy  $policy
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdatePolicyReqest $request, Policy $policy)
    {
        if ($request->has('contacts')) {
            $policy->contacts()->sync(Arr::pluck($request->safe()['contacts'], 'id'));
        }

        $policy->update($request->safe()->except('contacts'));

        session()->flash('message', 'Policy updated');
        return Redirect::back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Policy  $policy
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Policy $policy)
    {
        $policy->delete();

        session()->flash('message', 'Policy deleted');
        return Redirect::back();
    }

    public function restore(Policy $policy)
    {
        $policy->restore();

        session()->flash('message', 'Policy restored');
        return Redirect::back();
    }

    public function endingSoon(Request $request)
    {
        $days = 7;
        $start = Carbon::createFromTimestamp(1);
        $end = Carbon::now()->addDays($days);

        $query = Policy::select(['number', 'id', 'period_start', 'period_end'])
            ->orderBy('period_end')
            ->where('period_end', '>', $start)
            ->where('period_end', '<', $end);

        if ($request->expectsJson()) {
            return $query->limit(5)->get();
        }

        return Inertia::render('Policies/Index', [
            'filters' => $request->all('search', 'trashed'),
            'policies' => Policy::orderBy('period_end')
                ->with('contacts')
                ->where('period_end', '>', $start)
                ->where('period_end', '<', $end)
                ->paginate()
        ]);
    }
}

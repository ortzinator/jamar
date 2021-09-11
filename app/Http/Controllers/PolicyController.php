<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePolicyRequest;
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
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Policies/Index', [
            'filters' => $request->all('search', 'trashed'),
            'policies' => Policy::orderBy('created_at')
                ->with('contacts')
                ->filter($request->only('search', 'trashed'))
                ->paginate()
                ->through(function ($policy) {
                    return $policy->append(['contactNamesPreview']);
                })
        ]);
    }

    public function show(Policy $policy)
    {
        # code...
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        return Inertia::render('Policies/Create', [
            'contacts' => Inertia::lazy(
                fn() => Contact::orderBy('name')->filter(
                    $request->only('search', 'trashed')
                )
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
        $policy = Policy::create([
            'number' => $request['number'],
            'period_start' => new Carbon($request['range.start']),
            'period_end' => new Carbon($request['range.end']),
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
     * @return \Illuminate\Http\Response
     */
    public function edit(Policy $policy)
    {
        $policyData = $policy
            ->load([
                'contacts' => function ($query) {
                    $query->select(['name', 'id', 'address']);
                }
            ])
            ->load('agent')
            ->toArray();

        return Inertia::render('Policies/Edit', [
            'policy' => $policyData,
            'fields' => $policy->fields
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Policy  $policy
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Policy $policy)
    {
        $request->validate([
            'number' => ['required'],
            'contacts' => ['array'],
            'period_start' => ['date'],
            'period_end' => ['date'],
            'fields.*.name' => ['required']
        ]);

        if ($request->has('contacts')) {
            $contacts = Arr::pluck($request['contacts'], 'id');
            $policy->contacts()->sync($contacts);
        }

        $policy->update([
            'number' => $request['number'],
            'period_start' => new Carbon($request['range.start']),
            'period_end' => new Carbon($request['range.end']),
            'fields' => $request['fields']
        ]);
        return Redirect::back()->banner('Policy updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Policy  $policy
     * @return \Illuminate\Http\Response
     */
    public function destroy(Policy $policy)
    {
        $policy->delete();
        return Redirect::back()->banner(_('Policy deleted'));
    }

    public function restore(Policy $policy)
    {
        $policy->restore();
        return Redirect::back()->banner(_('Policy restored'));
    }

    public function endingSoon(Request $request)
    {
        $days = 7;
        $start = Carbon::createFromTimestamp(1);
        $end = Carbon::now()->addDays($days);

        if ($request->expectsJson()) {
            return Policy::select([
                'number',
                'id',
                'period_start',
                'period_end'
            ])
                ->orderBy('period_end')
                ->where('period_end', '>', $start)
                ->where('period_end', '<', $end)
                ->get();
        }

        return Inertia::render('Policies/Index', [
            'filters' => $request->all('search', 'trashed'),
            'policies' => Policy::orderBy('period_end')
                ->with('contacts')
                ->where('period_end', '>', $start)
                ->where('period_end', '<', $end)
                ->paginate()
                ->through(function ($policy) {
                    return $policy->append('contactNamesPreview');
                })
        ]);
    }
}

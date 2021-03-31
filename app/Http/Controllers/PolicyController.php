<?php

namespace App\Http\Controllers;

use App\Models\Holder;
use App\Models\Policy;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PolicyController extends Controller
{
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
            ->with('holders')
            ->filter($request->only('search', 'trashed'))
            ->paginate()
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
            'holders' => Inertia::lazy(fn () => Holder::orderBy('name')
                ->filter($request->only('search', 'trashed'))
            )
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Policy  $policy
     * @return \Illuminate\Http\Response
     */
    public function edit(Policy $policy)
    {
        return Inertia::render('Policies/Edit', [
            'policy' => $policy,
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
            'holders' => ['array'],
            'period_start' => ['date'],
            'period_end' => ['date'],
        ]);

        if ($request->has('holders')) {
            $holders = Arr::pluck($request['holders'], 'id');
            $policy->holders()->sync($holders);
        }

        $policy->update([
            'number' => $request['number'],
            'period_start' => new Carbon($request['range.start']),
            'period_end' => new Carbon($request['range.end']),
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
}

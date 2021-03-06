<?php

namespace App\Http\Controllers;

use App\Models\Policy;
use App\Models\PolicyField;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class PolicyFieldController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $policy = Policy::findOrFail($request['policy_id']);

        $policy->addField($request->only('name', 'value'));
        return Redirect::back()->banner(_('Policy field added'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PolicyField  $policyField
     * @return \Illuminate\Http\Response
     */
    public function show(PolicyField $policyField)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PolicyField  $policyField
     * @return \Illuminate\Http\Response
     */
    public function edit(PolicyField $policyField)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PolicyField  $policyField
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PolicyField $policyField)
    {
        //TODO: Validation?

        $policyField->update([
            'value' => $request['value']
        ]);

        return Redirect::back()->banner('Field updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PolicyField  $policyField
     * @return \Illuminate\Http\Response
     */
    public function destroy(PolicyField $policyField)
    {
        $policyField->delete();
        return Redirect::back()->banner(_('Policy field deleted'));
    }
}

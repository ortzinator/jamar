<?php

namespace App\Http\Controllers;

use App\Models\Holder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class HolderController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Holder::class, 'holder');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Holders/Index', [
            'filters' => $request->all('search', 'trashed'),
            'holders' => Holder::orderBy('name')
            ->filter($request->only('search', 'trashed'))
            ->paginate()
        ]);
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Holder  $holder
     * @return \Illuminate\Http\Response
     */
    public function edit(Holder $holder)
    {
        return Inertia::render('Holders/Edit', ['holder' => $holder->toArray()]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Holder  $holder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Holder $holder)
    {
        $request->validate([
            'name' => ['required'],
            'address' => ['required']
        ]);

        $holder->update($request->only(['name', 'address']));

        $request->session()->flash('flash.banner', _('Policyholder updated'));

        return Redirect::back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Holder  $holder
     * @return \Illuminate\Http\Response
     */
    public function destroy(Holder $holder)
    {
        //
    }
}

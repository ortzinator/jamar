<?php

namespace App\Http\Controllers;

use App\Models\Holder;
use Illuminate\Http\Request;
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
    public function index()
    {
        return Inertia::render('Holders/Index', [
            'filters' => request()->all('search', 'trashed'),
            'holders' => Holder::orderBy('name')
            ->filter(request()->only('search', 'trashed'))
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
     * Display the specified resource.
     *
     * @param  \App\Models\Holder  $holder
     * @return \Illuminate\Http\Response
     */
    public function show(Holder $holder)
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
        //
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
        //
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

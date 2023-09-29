<?php

namespace App\Http\Controllers;

use App\Models\History;
use App\Models\Policy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class HistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return QueryBuilder::for(History::class)
            ->allowedFilters(AllowedFilter::exact('policy_id'))
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        //TODO: Validation
        $policy = Policy::findOrFail($request['policy_id']);

        $policy->history()->create(
            array_merge($request->only('message', 'value', 'event_type'), [
                'user_id' => Auth::id()
            ])
        );

        session()->flash('message', 'History updated');
        return Redirect::back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return string
     */
    public function show(History $history)
    {
        return $history->toJson();
    }
}

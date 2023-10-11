<?php

namespace App\Http\Controllers;

use App\Models\History;
use App\Models\Policy;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class HistoryController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
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
     */
    public function show(History $history): string
    {
        return $history->toJson();
    }
}

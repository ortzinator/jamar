<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Contact::class, 'contact');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->expectsJson()) {
            return Contact::select('id', 'name', 'address')
                ->orderBy('name')
                ->filter($request->only('search', 'trashed'))
                ->limit(10)
                ->get();
        }

        return Inertia::render('Contacts/Index', [
            'filters' => $request->all('search', 'trashed'),
            'contacts' => Contact::orderBy('name')
                ->filter($request->only('search', 'trashed'))
                ->with('policies')
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
        return Inertia::render('Contacts/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Contact::create(
            $request->validate([
                'name' => ['required', 'min:3'],
                'address' => ['required', 'min:3']
            ])
        );

        return Redirect::route('contacts')->banner(_('Contact added'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function edit(Contact $contact)
    {
        return Inertia::render('Contacts/Edit', [
            'contact' => $contact->toArray()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contact $contact)
    {
        $request->validate([
            'name' => ['required'],
            'address' => ['required']
        ]);

        $contact->update($request->only(['name', 'address']));

        return Redirect::back()->banner(_('Contact updated'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();
        return Redirect::back()->banner(_('Contact deleted'));
    }

    public function restore(Contact $contact)
    {
        $contact->restore();
        return Redirect::back()->banner(_('Contact restored'));
    }
}
<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserSearchResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(User::class, 'user');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Users/Index', [
            'filters' => $request->all('search', 'trashed'),
            'users' => UserSearchResource::collection(
                User::query()
                    ->select(['name', 'created_at', 'updated_at', 'email', 'id'])
                    ->orderBy('users.created_at')
                    ->filter($request->only('search', 'trashed'))
                    ->paginate()
            )
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function show(User $user)
    {
        return Inertia::render('Users/Show', [
            'viewedUser' => UserResource::make($user)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function edit(User $user)
    {
        return Inertia::render('Users/Edit', [
            'editedUser' => UserResource::make($user)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $roles = Role::find($request->collect('roles')->pluck('id'));
        $user->syncRoles($roles);
        $user->update($request->validated());

        session()->flash('message', 'User updated');
        return Redirect::back();
    }
}

<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Policy;
use Illuminate\Auth\Access\HandlesAuthorization;

class PolicyPolicy
{
    use HandlesAuthorization;

    /**
     * Perform pre-authorization checks.
     *
     * @param  \App\Models\User  $user
     * @param  string  $ability
     * @return void|bool
     */
    public function before(User $user, $ability)
    {
        //
    }

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        if ($user->can('view policies')) {
            return true;
        }
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Policy  $policy
     * @return mixed
     */
    public function view(User $user, Policy $policy)
    {
        if ($user->can('view policies')) {
            return true;
        }
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        if ($user->can('create policies')) {
            return true;
        }
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Policy  $policy
     * @return mixed
     */
    public function update(User $user, Policy $policy)
    {
        if ($user->can('update policies')) {
            return true;
        }
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Policy  $policy
     * @return mixed
     */
    public function delete(User $user, Policy $policy)
    {
        if ($user->can('delete policies')) {
            return true;
        }
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Policy  $policy
     * @return mixed
     */
    public function restore(User $user, Policy $policy)
    {
        if ($user->can('restore policies')) {
            return true;
        }
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Policy  $policy
     * @return mixed
     */
    public function forceDelete(User $user, Policy $policy)
    {
        if ($user->can('hard delete policies')) {
            return true;
        }
    }
}

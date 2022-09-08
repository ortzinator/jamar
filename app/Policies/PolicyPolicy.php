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
        return $user->can('view policies');
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
        return $user->can('view policies');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->can('create policies');
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
        return $user->can('update policies');
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
        return $user->can('delete policies');
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
        return $user->can('restore policies');
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
        return $user->can('hard delete policies');
    }
}

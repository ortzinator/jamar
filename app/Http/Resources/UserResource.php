<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Spatie\Permission\Models\Role;

/** @mixin \App\Models\User */
class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $roles = Role::all();
        $roles->transform(function ($role) {
            $role['enabled'] = $this->hasRole($role);
            return $role;
        });

        return [
            'name' => $this->name,
            'email' => $this->email,
            'id' => $this->id,
            'roles' => $roles,
            'can' => $this->getAllPermissions(),
            'profile_photo_url' => $this->profile_photo_url
        ];
    }
}

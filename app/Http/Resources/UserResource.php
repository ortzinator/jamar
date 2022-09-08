<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Spatie\Permission\Models\Role;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $roles = Role::all();
        $roles->transform(function ($role) {
            $role->enabled = $this->hasRole($role);
            return $role;
        });

        return [
            'name' => $this->name,
            'email' => $this->email,
            'id' => $this->id,
            'roles' => $roles,
            'can' => $this->getPermissions()
        ];
    }
}

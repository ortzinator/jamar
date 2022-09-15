<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        Schema::disableForeignKeyConstraints();
        Permission::query()->delete();
        Role::query()->delete();
        Schema::enableForeignKeyConstraints();

        $permissionNames = [
            'view policies',
            'create policies',
            'update policies',
            'update policy facts',
            'view policy facts',
            'delete policies',

            'view contacts',
            'create contacts',
            'update contacts',
            'view contact facts',
            'update contact facts',
            'delete contacts',

            'view users',
            'create users',
            'update users',
            'view user facts',
            'update user facts',
            'delete users'
        ];

        $permissions = collect($permissionNames)->map(function ($permission) {
            return [
                'name' => $permission,
                'guard_name' => 'web',
                'created_at' => now(),
                'updated_at' => now()
            ];
        });

        Permission::insert($permissions->toArray());

        Role::create(['name' => 'Super Admin']);
        Role::create(['name' => 'Manager'])->syncPermissions([
            'view policies',
            'create policies',
            'update policies',
            'update policy facts',
            'view policy facts',
            'delete policies',
            'view contacts',
            'create contacts',
            'update contacts',
            'view contact facts',
            'update contact facts',
            'delete contacts',
            'view users',
            'create users',
            'update users',
            'view user facts',
            'update user facts',
            'delete users'
        ]);
        Role::create(['name' => 'Employee'])->syncPermissions([
            'view policies',
            'create policies',
            'update policies',
            'update policy facts',
            'view policy facts',
            'view contacts',
            'create contacts',
            'update contacts',
            'view contact facts',
            'update contact facts',
            'view users'
        ]);
    }
}

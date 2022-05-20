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
        app()[
            \Spatie\Permission\PermissionRegistrar::class
        ]->forgetCachedPermissions();

        Schema::disableForeignKeyConstraints();
        Permission::truncate();
        Role::truncate();
        Schema::enableForeignKeyConstraints();

        Permission::create(['name' => 'view policies']);
        Permission::create(['name' => 'create policies']);
        Permission::create(['name' => 'update policies']);
        Permission::create(['name' => 'update policy facts']);
        Permission::create(['name' => 'view policy facts']);
        Permission::create(['name' => 'delete policies']);

        Permission::create(['name' => 'view contacts']);
        Permission::create(['name' => 'create contacts']);
        Permission::create(['name' => 'update contacts']);
        Permission::create(['name' => 'view contact facts']);
        Permission::create(['name' => 'update contact facts']);
        Permission::create(['name' => 'delete contacts']);

        Role::create(['name' => 'Super Admin'])->givePermissionTo(
            Permission::all()
        );
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
            'delete contacts'
        ]);
        Role::create(['name' => 'Employee'])->syncPermissions([
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
            'delete contacts'
        ]);
    }
}

<?php

namespace Tests;

use App\Models\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Arr;
use Illuminate\Testing\Assert;
use Illuminate\Testing\TestResponse;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function setUp(): void
    {
        parent::setUp();

        app()[
            \Spatie\Permission\PermissionRegistrar::class
        ]->forgetCachedPermissions();
        $this->app
            ->make(\Spatie\Permission\PermissionRegistrar::class)
            ->registerPermissions();
    }

    public function signIn($admin = false)
    {
        $role = Role::create(['name' => 'Super Admin']);
        $role->givePermissionTo(Permission::all());

        $user = User::factory()->create(); //User factory defaults password to "password"
        if ($admin) {
            $user->assignRole('Super Admin');
        }
        return $this->actingAs($user);
    }
}

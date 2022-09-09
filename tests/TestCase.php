<?php

namespace Tests;

use App\Models\User;
use Database\Seeders\PermissionSeeder;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

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
        $this->seed(PermissionSeeder::class);
        $user = User::factory()->create(); //User factory defaults password to "password"
        if ($admin) {
            $user->assignRole('Super Admin');
        } else {
            $user->assignRole('Employee');
        }
        return $this->actingAs($user);
    }

    public function signInAdmin()
    {
        return $this->signIn(true);
    }
}

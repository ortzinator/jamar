<?php

namespace Tests;

use App\Models\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    public function signIn($admin = false)
    {
        return $this->actingAs(User::factory()->create(['role_id' => $admin ? 3 : 1]));
    }
}

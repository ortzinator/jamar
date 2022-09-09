<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\Assert;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_shows_users()
    {
        $this->signIn();
        $response = $this->get('/users');

        $response->assertStatus(200)->assertInertia(
            fn(Assert $page) => $page->has('policies.data', 1)
        );;
    }
}

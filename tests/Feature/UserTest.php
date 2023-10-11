<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_shows_users(): void
    {
        $this->signIn();

        $response = $this->get('/users');

        $response->assertStatus(200)->assertInertia(
            fn(Assert $page) => $page->has('users.data', 1)
        );;
    }

    public function test_show_user(): void
    {
        $this->signIn();

        User::factory()->create();

        $id = User::first()->id;

        $response = $this->get("/users/{$id}");

        $response->assertStatus(200)->assertInertia(
            fn(Assert $page) => $page->has('viewedUser')
        );
    }
}

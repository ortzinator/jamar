<?php

namespace Tests\Feature;

use App\Models\Holder;
use App\Models\Policy;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class HolderTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_holder_can_have_policies()
    {
        $holder = Holder::factory()->create();
        $holder->policies()->attach(Policy::factory()->create());
        $holder->policies()->attach(Policy::factory()->create());

        $this->assertCount(2, $holder->policies);
    }

    public function test_holders_cannot_be_viewed_by_non_admins()
    {
        $this->signIn();

        $this->get(route('holders'))
            ->assertStatus(403);
    }

    public function test_holders_can_be_viewed_by_admins()
    {
        $this->signIn(true);

        $this->get(route('holders'))
            ->assertStatus(200);
    }
}

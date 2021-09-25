<?php

namespace Tests\Feature;

use App\Models\Policy;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Inertia\Testing\Assert;
use Tests\TestCase;

class PolicyHistoryTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_create_policy_fields()
    {
        $this->signIn(true);
        $this->withoutExceptionHandling();

        $policy = Policy::factory()->create();

        $this->post(route('histories.store'), [
            'policy_id' => $policy->id,
            'message' => 'Something happened',
            'event_type' => 'note',
            'user_id' => Auth::id()
        ])->assertRedirect();

        // prettier-ignore
        $this->get(route('policies.edit', $policy->id))->assertInertia(
            fn(Assert $page) => $page
                ->has('histories', 2)
                ->where('histories.1.message', 'Something happened')
            );
    }
}

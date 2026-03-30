<?php

namespace Tests\Feature;

use App\Models\Policy;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class PolicyHistoryTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_create_policy_fields(): void
    {
        $this->signInAdmin();
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

    public function test_can_view_history_entry(): void
    {
        $this->signInAdmin();
        $this->withoutExceptionHandling();

        $policy = Policy::factory()->create();

        $this->post(route('histories.store'), [
            'policy_id' => $policy->id,
            'message' => 'A note',
            'event_type' => 'note',
        ]);

        $history = $policy->history()->where('event_type', 'note')->first();

        $this->get(route('histories.show', $history->id))
            ->assertOk()
            ->assertJson([
                'id' => $history->id,
                'message' => 'A note',
                'event_type' => 'note',
            ]);
    }

    public function test_history_is_attributed_to_authenticated_user(): void
    {
        $this->signInAdmin();
        $this->withoutExceptionHandling();

        $policy = Policy::factory()->create();

        $this->post(route('histories.store'), [
            'policy_id' => $policy->id,
            'message' => 'A note',
            'event_type' => 'note',
        ]);

        $this->assertDatabaseHas('histories', [
            'policy_id' => $policy->id,
            'event_type' => 'note',
            'user_id' => Auth::id(),
        ]);
    }

    public function test_history_includes_user_name(): void
    {
        $this->signInAdmin();
        $this->withoutExceptionHandling();

        $policy = Policy::factory()->create();

        $this->post(route('histories.store'), [
            'policy_id' => $policy->id,
            'message' => 'A note',
            'event_type' => 'note',
        ]);

        $history = $policy->history()->where('event_type', 'note')->first();

        $this->get(route('histories.show', $history->id))
            ->assertOk()
            ->assertJsonPath('user_name', Auth::user()->name);
    }

    public function test_message_is_persisted_to_database(): void
    {
        $this->signInAdmin();
        $this->withoutExceptionHandling();

        $policy = Policy::factory()->create();

        $this->post(route('histories.store'), [
            'policy_id' => $policy->id,
            'event_type' => 'note',
            'message' => 'some-value',
        ]);

        $this->assertDatabaseHas('histories', [
            'policy_id' => $policy->id,
            'event_type' => 'note',
            'message' => 'some-value',
        ]);
    }

    public function test_store_returns_404_for_invalid_policy(): void
    {
        $this->signInAdmin();

        $this->post(route('histories.store'), [
            'policy_id' => 99999,
            'message' => 'A note',
            'event_type' => 'note',
        ])->assertNotFound();
    }
}

<?php

namespace Tests\Feature;

use App\Models\Policy;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PolicyFieldTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_create_policy_fields()
    {
        $this->signIn(true);

        $policy = Policy::factory()->create();

        $this->post(route('policyfield.store'), [
            'policy_id' => $policy->id,
            'name' => 'License Number',
            'value' => 'TB23457'
        ])->assertRedirect();
        
        $this->get(route('policies.edit', $policy->id))
            ->assertPropCount(1, 'policy.fields');
    }
}

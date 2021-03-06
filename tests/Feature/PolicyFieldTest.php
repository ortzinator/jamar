<?php

namespace Tests\Feature;

use App\Models\Policy;
use App\Models\PolicyField;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\Assert;
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
            ->assertInertia(fn (Assert $page) => $page
                ->has('policy.fields', 1)
            );
    }

    public function test_policyfields_can_be_edited()
    {
        $this->signIn(true);

        /**  @var Policy $policy */
        $policy = Policy::factory()->create();

        /**  @var PolicyField $policyField */
        $policyField = PolicyField::factory()->for($policy)->create();
        $policy->refresh();

        $this->post(route('policyfield.update', $policyField->id), [
            'value' => 'foobar'
        ]);
        
        $this->get(route('policies.edit', $policy->id))
            ->assertInertia(fn (Assert $page) => $page
                ->where('policy.fields.0.value', 'foobar')
            );

    }
}

<?php

namespace Tests\Feature;

use App\Models\Holder;
use App\Models\Policy;
use App\Models\PolicyField;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PolicyTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_policy_can_have_multiple_holders()
    {
        $policy = Policy::factory()->create();
        $policy->holders()->attach(Holder::factory()->create());
        $policy->holders()->attach(Holder::factory()->create());

        $this->assertCount(2, $policy->holders);
    }

    public function test_a_policy_can_have_multiple_fields()
    {
        $this->signIn(true);
        // $this->withoutExceptionHandling();

        $policy = Policy::factory()->create();
        $policy->addField(PolicyField::factory()->makeOne()->toArray());
        $policy->addField(PolicyField::factory()->makeOne()->toArray());
        $policy->addField(PolicyField::factory()->makeOne()->toArray());
        $policy->addField(PolicyField::factory()->makeOne()->toArray());
        // dd($policy->fresh()->toJson());
        $policy->refresh();
        $this->assertCount(4, $policy->fields);

        $this->get(route('policies.edit', $policy->id))
            ->assertStatus(200)
            ->assertPropExists('policy')
            ->assertPropExists('policy.number')
            ->assertPropCount(4, 'policy.fields');
    }
}

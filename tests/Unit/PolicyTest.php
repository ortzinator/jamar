<?php

namespace Tests\Unit;

use App\Models\Holder;
use App\Models\Policy;
use Illuminate\Foundation\Testing\RefreshDatabase;
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
}

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

    public function test_a_policy_has_a_pretty_one_line_list_of_holders()
    {
        $policy = Policy::factory()->create();
        $policy->holders()->attach(Holder::factory()->create(['name' => 'John Doe']));
        $policy->holders()->attach(Holder::factory()->create(['name' => 'Jane Doe']));

        $this->assertEquals('John Doe, Jane Doe', $policy->holderNamesPreview);
    }

    public function test_a_policy_can_filter_by_expired()
    {
        Policy::factory()->create([
            'number' => 'valid',
            'period_start' => now()->subDays(10),
            'period_end' => now()->addDays(2)
        ]);

        Policy::factory()->create([
            'number' => 'expired',
            'period_start' => now()->subDays(10),
            'period_end' => now()->subDays(1)
        ]);

        $list = Policy::expired()->get();

        $this->assertCount(1, $list);
    }

    public function test_a_policy_fan_filter_expiring_soon()
    {
        Policy::factory()->create([
            'period_start' => now()->subDays(100),
            'period_end' => now()->addDays(1)
        ]);

        Policy::factory()->create([
            'period_start' => now()->subDays(100),
            'period_end' => now()->addDays(10)
        ]);

        $list = Policy::expiringSoon()->get();

        $this->assertCount(1, $list);
    }
}

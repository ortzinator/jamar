<?php

namespace Tests\Unit;

use App\Models\Contact;
use App\Models\History;
use App\Models\Policy;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class PolicyTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        Auth::shouldReceive('id')->andReturn(1);
    }

    public function test_a_policy_can_have_multiple_contacts()
    {
        $policy = Policy::factory()->create();
        $policy->contacts()->attach(Contact::factory()->create());
        $policy->contacts()->attach(Contact::factory()->create());

        $this->assertCount(2, $policy->contacts);
    }

    public function test_a_policy_has_a_pretty_one_line_list_of_contacts()
    {
        $policy = Policy::factory()->create();
        $policy
            ->contacts()
            ->attach(Contact::factory()->create(['name' => 'John Doe']));
        $policy
            ->contacts()
            ->attach(Contact::factory()->create(['name' => 'Jane Doe']));

        $this->assertEquals('John Doe, Jane Doe', $policy->contactNamesPreview);
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

    public function test_a_policy_can_be_cancelled()
    {
        $policy = Policy::factory()->create();
        $policy->cancel();

        $this->assertTrue($policy->isCancelled());
    }

    public function test_can_filter_cancelled_policies()
    {
        Policy::factory()
            ->create()
            ->cancel();
        Policy::factory()->create();

        $list = Policy::cancelled()->get();

        $this->assertCount(1, $list);
    }

    public function test_filter_scope_matches_fields_mid_string()
    {
        Policy::factory()->create([
            'number' => 'NOMATCH',
            'fields' => ['description' => 'some mid-string value xyz789 here'],
        ]);

        Policy::factory()->create([
            'number' => 'NOMATCH2',
            'fields' => ['description' => 'unrelated content'],
        ]);

        $results = Policy::filter(['search' => 'xyz789'])->get();

        $this->assertCount(1, $results);
    }

    public function test_filter_scope_does_not_match_fields_as_prefix_only()
    {
        // 'number' is prefix-matched (term%), but 'fields' is substring-matched (%term%).
        // A value that appears mid-string in fields should match; the same value as a
        // number prefix would not match if it only appears mid-string in the number.
        Policy::factory()->create([
            'number' => 'XMIDVALUEX',
            'fields' => ['note' => 'no match here'],
        ]);

        Policy::factory()->create([
            'number' => 'NOMATCH',
            'fields' => ['note' => 'contains MIDVALUE somewhere inside'],
        ]);

        $results = Policy::filter(['search' => 'MIDVALUE'])->get();

        // Only the fields match should be found; number 'XMIDVALUEX' does not start with 'MIDVALUE'
        $this->assertCount(1, $results);
        $this->assertEquals('NOMATCH', $results->first()->number);
    }

    public function test_has_a_history_of_facts()
    {
        $policy = Policy::factory()
            ->has(History::factory(10))
            ->create();

        $list = $policy->history;

        $this->assertCount(11, $list);
    }
}

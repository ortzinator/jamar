<?php

namespace Tests\Feature;

use App\Models\Holder;
use App\Models\Policy;
use App\Models\PolicyField;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Inertia\Testing\Assert;
use Tests\TestCase;

class PolicyTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_add_holders_to_a_policy()
    {
        $this->signIn(true);
        $this->withoutExceptionHandling();

        /**  @var Policy $policy */
        $policy = Policy::factory()->create();
        // $policy->addField(PolicyField::factory()->makeOne()->toArray());

        $policy->refresh();

        /**  @var \Illuminate\Database\Eloquent\Collection $holders */
        $holders = Holder::factory(3)->create();

        $this->put(route('policies.update', $policy->id), [
            'number' => $policy->number,
            'holders' => $holders->toArray(),
        ]);

        $this->get(route('policies.edit', $policy->id))->assertInertia(
            fn(Assert $page) => $page->has('policy.holders', 3),
        );
    }

    public function test_a_number_is_required()
    {
        $this->signIn(true);

        $policy = Policy::factory()->create();

        $this->put(route('policies.update', $policy->id), [
            'number' => '',
        ])->assertSessionHasErrors();
    }

    public function test_can_search_policies()
    {
        $this->signIn(true);

        $policy = Policy::factory()->create(['number' => '1234']);
        Policy::factory(10)->create();

        $this->get('policies/?search=1234')->assertInertia(
            fn(Assert $page) => $page->has('policies.data', 1),
        );
    }

    public function test_can_search_policy_fields()
    {
        $this->signIn(true);

        $policy = Policy::factory()->create([
            'number' => '1234',
            'fields' => ['name' => 'value', 'foobar' => 'testing123'],
        ]);
        Policy::factory(10)->create();

        $this->get('policies/?search=testing123')->assertInertia(
            fn(Assert $page) => $page->has('policies.data', 1),
        );
    }

    public function test_can_search_trashed_policies()
    {
        $this->signIn(true);
        $this->withExceptionHandling();

        $policy = Policy::factory()->create(['number' => '1234']);
        $policy->delete();
        Policy::factory(10)->create();

        $this->get('policies/?search=1234')->assertInertia(
            fn(Assert $page) => $page->has('policies.data', 0),
        );

        $this->get('policies/?search=1234&trashed=with')->assertInertia(
            fn(Assert $page) => $page->has('policies.data', 1),
        );
    }

    public function test_ending_soon_or_past_due()
    {
        $this->signIn(true);

        $this->withoutExceptionHandling();

        $today = Carbon::now()->isoFormat('YYYY-MM-DD');
        $foreverAgo = Carbon::createFromTimestamp(1)->isoFormat('YYYY-MM-DD');
        $twoDaysAgo = Carbon::now()
            ->subDays(2)
            ->isoFormat('YYYY-MM-DD');
        $twoDaysFromNow = Carbon::now()
            ->addDays(2)
            ->isoFormat('YYYY-MM-DD');
        $aWeekFromNow = Carbon::now()
            ->addWeek()
            ->isoFormat('YYYY-MM-DD');
        $aWeekAgo = Carbon::now()
            ->subWeek()
            ->isoFormat('YYYY-MM-DD');
        $twoWeeksFromNow = Carbon::now()
            ->addWeeks(2)
            ->isoFormat('YYYY-MM-DD');

        $pol1 = Policy::factory()->create([
            'period_start' => $twoDaysAgo,
            'period_end' => $twoDaysFromNow,
        ]);
        $pol2 = Policy::factory()->create([
            'period_start' => $aWeekAgo,
            'period_end' => $twoDaysAgo,
        ]);
        $pol3 = Policy::factory()->create([
            'period_start' => $aWeekAgo,
            'period_end' => $twoWeeksFromNow,
        ]);

        $this->getJson('/policies/ending-soon')
            ->assertOk()
            ->assertJsonCount(2);

        $this->get('/policies/ending-soon')
            ->assertOk()
            ->assertInertia(
                fn(Assert $page) => $page->has('policies.data', 2),
                function (Collection $val) use ($pol1) {
                    return $val->contains($pol1->number);
                },
            );
    }

    public function test_a_policy_has_an_agent()
    {
        $this->signIn(true);
        $this->withExceptionHandling();

        $policy = Policy::factory()->create(['number' => '1234']);

        $this->get(route('policies.edit', $policy->id))
            ->assertOk()
            ->assertInertia(
                fn(Assert $page) => $page->where(
                    'policy.agent.name',
                    Auth::user()->name,
                ),
            );
    }

    public function test_can_create_policy()
    {
        $this->signIn();
        $this->withoutExceptionHandling();

        $policy = Policy::factory()->make(['id' => 1]);
        $holders = Holder::factory(4)->create();

        $data = $policy->toArray();
        $data['holders'] = $holders->toArray();

        $this->post(route('policies.store'), $data);

        $policy->refresh();

        $this->get(route('policies.edit', 1))->assertInertia(
            fn(Assert $page) => $page
                ->has('policy.holders', 4)
                ->has('policy.period_start')
                ->has('policy.agent_id')
                ->has('policy.number'),
        );
    }
}

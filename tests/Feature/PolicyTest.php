<?php

namespace Tests\Feature;

use App\Models\Contact;
use App\Models\Policy;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class PolicyTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_add_contacts_to_a_policy(): void
    {
        $this->signInAdmin();
        $this->withoutExceptionHandling();

        /** @var Policy $policy */
        $policy = Policy::factory()->create();
        // $policy->addField(PolicyField::factory()->makeOne()->toArray());

        $policy->refresh();

        /** @var \Illuminate\Database\Eloquent\Collection $contacts */
        $contacts = Contact::factory(3)->create();

        $this->put(route('policies.update', $policy->id), [
            'number' => $policy->number,
            'contacts' => $contacts->toArray(),
        ]);

        $this->get(route('policies.edit', $policy->id))->assertInertia(
            fn (Assert $page) => $page->has('policy.contacts', 3)
        );
    }

    public function test_a_number_is_required(): void
    {
        $this->signInAdmin();

        $policy = Policy::factory()->create();

        $this->put(route('policies.update', $policy->id), [
            'number' => '',
        ])->assertSessionHasErrors();
    }

    public function test_can_search_policies(): void
    {
        $this->signInAdmin();

        $policy = Policy::factory()->create(['number' => '1234']);
        Policy::factory(10)->create();

        $this->get('policies/?search=1234')->assertInertia(
            fn (Assert $page) => $page->has('policies.data', 1)
        );
    }

    public function test_can_search_policies_by_contact(): void
    {
        $this->signInAdmin();

        $policy = Policy::factory()
            ->hasContacts(1, ['name' => 'JamesTKirk'])
            ->create(['number' => '1234']);
        Policy::factory(10)->create();

        $this->get('policies/?search=JamesTKirk')->assertInertia(
            fn (Assert $page) => $page->has('policies.data', 1)
        );
    }

    public function test_can_search_policy_fields(): void
    {
        $this->signInAdmin();

        $policy = Policy::factory()->create([
            'number' => '1234',
            'fields' => ['name' => 'value', 'foobar' => 'testing123'],
        ]);
        Policy::factory(10)->create();

        $this->get('policies/?search=testing123')->assertInertia(
            fn (Assert $page) => $page->has('policies.data', 1)
        );
    }

    public function test_can_search_trashed_policies(): void
    {
        $this->signInAdmin();
        $this->withExceptionHandling();

        $policy = Policy::factory()->create(['number' => '1234']);
        $policy->delete();
        Policy::factory(10)->create();

        $this->get('policies/?search=1234')->assertInertia(
            fn (Assert $page) => $page->has('policies.data', 0)
        );

        $this->get('policies/?search=1234&trashed=with')->assertInertia(
            fn (Assert $page) => $page->has('policies.data', 1)
        );
    }

    public function test_ending_soon_or_past_due(): void
    {
        $this->signInAdmin();

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
                fn (Assert $page) => $page->has('policies.data', 2),
                function (Collection $val) use ($pol1) {
                    return $val->contains($pol1->number);
                }
            );
    }

    public function test_can_create_policy(): void
    {
        $this->signInAdmin();
        $this->withoutExceptionHandling();

        $contacts = Contact::factory(4)->create();

        $amount = 12345;
        $policy = Policy::factory()->make([
            'contacts' => $contacts->toArray(),
            'premium' => $amount,
        ]);

        $this->post(route('policies.store'), $policy->getAttributes());

        $policy = Policy::first();

        $this->get(route('policies.edit', $policy->id))
            ->assertSessionDoesntHaveErrors()
            ->assertInertia(
                fn (Assert $page) => $page
                    ->has('policy.contacts', 4)
                    ->has('policy.period_start')
                    ->has('policy.agent_id')
                    ->has('policy.number')
                    ->where('policy.premium.amount', strval($amount))
                    ->where('policy.premium.subunit', 2)
            );
    }

    public function test_can_show_edit_page(): void
    {
        $this->signInAdmin();
        $policy = Policy::factory()
            ->has(Contact::factory(4))
            ->create();

        $this->get(route('policies.edit', $policy->id))
            ->assertSessionDoesntHaveErrors()
            ->assertInertia(
                fn (Assert $page) => $page
                    ->has('policy.contacts', 4)
                    ->has('policy.period_start')
                    ->has('policy.agent_id')
                    ->has('policy.number')
                    ->has('policy.premium.amount')
                    ->has('policy.premium.formatted')
            );
    }

    public function test_can_view_create_form(): void
    {
        $this->signInAdmin();

        $this->get(route('policies.create'))
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('Policies/Create'));
    }

    public function test_can_delete_policy(): void
    {
        $this->signInAdmin();
        $this->withoutExceptionHandling();

        $policy = Policy::factory()->create();

        $this->delete(route('policies.destroy', $policy->id))
            ->assertRedirect();

        $this->assertSoftDeleted('policies', ['id' => $policy->id]);
    }

    public function test_can_restore_policy(): void
    {
        $this->signInAdmin();
        $this->withoutExceptionHandling();

        $policy = Policy::factory()->create();
        $policy->delete();

        $this->put(route('policies.restore', $policy->id))
            ->assertRedirect();

        $this->assertNotSoftDeleted('policies', ['id' => $policy->id]);
    }

    public function test_contacts_required_on_create(): void
    {
        $this->signInAdmin();

        $policy = Policy::factory()->make();

        $this->post(route('policies.store'), array_merge($policy->getAttributes(), [
            'contacts' => [],
        ]))->assertSessionHasErrors('contacts');
    }

    public function test_invalid_dates_rejected_on_create(): void
    {
        $this->signInAdmin();

        $contacts = Contact::factory(1)->create();
        $policy = Policy::factory()->make();

        $this->post(route('policies.store'), array_merge($policy->getAttributes(), [
            'contacts' => $contacts->toArray(),
            'period_start' => 'not-a-date',
            'period_end' => 'not-a-date',
        ]))->assertSessionHasErrors(['period_start', 'period_end']);
    }

    public function test_agent_must_exist_on_create(): void
    {
        $this->signInAdmin();

        $contacts = Contact::factory(1)->create();
        $policy = Policy::factory()->make();

        $this->post(route('policies.store'), array_merge($policy->getAttributes(), [
            'contacts' => $contacts->toArray(),
            'agent_id' => 99999,
        ]))->assertSessionHasErrors('agent_id');
    }

    public function test_premium_must_be_integer_on_create(): void
    {
        $this->signInAdmin();

        $contacts = Contact::factory(1)->create();
        $policy = Policy::factory()->make();

        $this->post(route('policies.store'), array_merge($policy->getAttributes(), [
            'contacts' => $contacts->toArray(),
            'premium' => 'not-a-number',
        ]))->assertSessionHasErrors('premium');
    }

    public function test_invalid_date_rejected_on_update(): void
    {
        $this->signInAdmin();

        $policy = Policy::factory()->create();

        $this->put(route('policies.update', $policy->id), [
            'number' => $policy->number,
            'period_end' => 'not-a-date',
        ])->assertSessionHasErrors('period_end');
    }

    public function test_agent_must_exist_on_update(): void
    {
        $this->signInAdmin();

        $policy = Policy::factory()->create();

        $this->put(route('policies.update', $policy->id), [
            'number' => $policy->number,
            'agent_id' => 99999,
        ])->assertSessionHasErrors('agent_id');
    }

    public function test_policy_created_history_event_is_recorded(): void
    {
        $this->signInAdmin();
        $this->withoutExceptionHandling();

        $contacts = Contact::factory(1)->create();
        $policy = Policy::factory()->make(['contacts' => $contacts->toArray()]);

        $this->post(route('policies.store'), $policy->getAttributes());

        $created = Policy::first();

        $this->assertDatabaseHas('histories', [
            'policy_id' => $created->id,
            'event_type' => 'policy_created',
        ]);
    }

    public function test_policy_updated_history_event_is_recorded(): void
    {
        $this->signInAdmin();
        $this->withoutExceptionHandling();

        $policy = Policy::factory()->create();
        $historyCountBefore = $policy->history()->count();

        $this->put(route('policies.update', $policy->id), [
            'number' => 'UPDATED-NUMBER',
        ]);

        $this->assertDatabaseHas('histories', [
            'policy_id' => $policy->id,
            'event_type' => 'policy_updated',
        ]);

        $this->assertGreaterThan($historyCountBefore, $policy->history()->count());
    }
}

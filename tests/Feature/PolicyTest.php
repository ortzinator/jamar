<?php

namespace Tests\Feature;

use App\Models\Holder;
use App\Models\Policy;
use App\Models\PolicyField;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\Assert;
use Tests\TestCase;

class PolicyTest extends TestCase
{
    use RefreshDatabase;

    // public function test_a_policy_can_have_multiple_fields()
    // {
    //     $this->signIn(true);
    //     // $this->withoutExceptionHandling();

    //     $policy = Policy::factory()->create();
    //     $policy->addField(PolicyField::factory()->makeOne()->toArray());
    //     $policy->addField(PolicyField::factory()->makeOne()->toArray());
    //     $policy->addField(PolicyField::factory()->makeOne()->toArray());
    //     $policy->addField(PolicyField::factory()->makeOne()->toArray());
        
    //     $policy->refresh();

    //     $this->get(route('policies.edit', $policy->id))
    //         ->assertInertia(fn (Assert $page) => $page
    //             ->has('policy')
    //             ->has('policy.number')
    //             ->has('policy.fields', 4)
    //         );
    // }

    // public function test_an_admin_can_add_fields_to_a_policy()
    // {
    //     $this->signIn(true);
    //     // $this->withoutExceptionHandling();

    //     $policy = Policy::factory()->create();
    //     $policy->addField(PolicyField::factory()->makeOne()->toArray());
    //     $policy->addField(PolicyField::factory()->makeOne()->toArray());

    //     $policy->refresh();

    //     $this->put(route('policies.update', $policy->id), [
    //         'number' => 'NBT8730'
    //     ]);

    //     $this->get(route('policies.edit', $policy->id))
    //         ->assertInertia(fn (Assert $page) => $page
    //             ->where('policy.number', 'NBT8730')
    //         );
    // }

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
            'holders' => $holders->toArray()
        ]);

        $this->get(route('policies.edit', $policy->id))
            ->assertInertia(fn (Assert $page) => $page
                ->has('policy.holders', 3)
            );
        
    }

    public function test_a_number_is_required()
    {
        $this->signIn(true);

        $policy = Policy::factory()->create();

        $this->put(route('policies.update', $policy->id), [
            'number' => ''
        ])
        ->assertSessionHasErrors();
    }

    public function test_can_search_policies()
    {
        $this->signIn(true);

        $policy = Policy::factory()->create(['number' => '1234']);
        Policy::factory(10)->create();

        $this->get('policies/?search=1234')
            ->assertInertia(fn (Assert $page) => $page
                ->has('policies.data', 1)
            );
    }

    public function test_can_search_policy_fields()
    {
        $this->signIn(true);

        $policy = Policy::factory()->create([
            'number' => '1234',
            'fields' => ['name' => 'value', 'foobar' => 'testing123']
        ]);
        Policy::factory(10)->create();

        $this->get('policies/?search=testing123')
            ->assertInertia(fn (Assert $page) => $page
                ->has('policies.data', 1)
            );
    }

    public function test_can_search_trashed_policies()
    {
        $this->signIn(true);
        $this->withExceptionHandling();

        $policy = Policy::factory()->create(['number' => '1234']);
        $policy->delete();
        Policy::factory(10)->create();

        $this->get('policies/?search=1234')
            ->assertInertia(fn (Assert $page) => $page
                ->has('policies.data', 0)
            );

        $this->get('policies/?search=1234&trashed=with')
            ->assertInertia(fn (Assert $page) => $page
                ->has('policies.data', 1)
            );
    }
}

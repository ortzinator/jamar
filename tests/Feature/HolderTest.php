<?php

namespace Tests\Feature;

use App\Models\Holder;
use App\Models\Policy;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Inertia\Testing\Assert;
use Tests\TestCase;

class HolderTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_holder_can_have_policies()
    {
        $holder = Holder::factory()->create();
        $holder->policies()->attach(Policy::factory()->create());
        $holder->policies()->attach(Policy::factory()->create());

        $this->assertCount(2, $holder->policies);
    }

    public function test_holders_cannot_be_viewed_by_non_admins()
    {
        $this->signIn();

        $this->get(route('holders'))
            ->assertStatus(403);
    }

    public function test_holders_can_be_viewed_by_admins()
    {
        $this->signIn(true);

        Holder::factory(3)->create();

        $this->get(route('holders'))
            ->assertInertia(function (Assert $page){
                $page->component('Holders/Index')
                    ->has('holders.data', 3);
            });
            // ->assertPropCount(3, 'holders.data');
    }

    public function test_can_search_for_holders()
    {
        $this->signIn(true);
        $this->withoutExceptionHandling();

        $holder = Holder::factory()->create(['name' => 'John Doe']);
        Holder::factory()->create(['name' => 'Jane Doe']);

        $this->get('holders?search=John')
            ->assertInertia(fn (Assert $page) => $page
                    ->where('filters.search', 'John')
                    ->has('holders.data', 1)
                    ->where('holders.data.0.address', $holder->address)
            );
    }

    public function test_an_admin_can_edit_holders()
    {
        $this->signIn(true);
        $this->withoutExceptionHandling();

        $holder = Holder::factory()->create(['name' => 'John Doe']);

        $this->get(route('holders.edit', $holder->id))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Holders/Edit')
        );

        $this->put(route('holders.update', $holder->id), ['name' => 'Jane Doe', 'address' => $holder->address])
            ->assertRedirect(route('holders.edit', $holder->id));

        $this->assertEquals('Jane Doe', $holder->fresh()->name);
    }

    public function test_cannot_view_deleted_holders()
    {
        $this->signIn(true);

        $holders = Holder::factory(4)->create(['name' => 'John Doe']);
        $holders->first()->delete();

        $this->get(route('holders'))
            ->assertInertia(fn (Assert $page) => $page
                ->has('holders.data', 3)
            );
    }

    public function test_can_search_by_deleted_holders()
    {
        $this->signIn(true);
        $this->withoutExceptionHandling();

        $holders = Holder::factory(4)->create(['name' => 'John Doe']);
        $holders->first()->delete();

        $this->get('holders?trashed=with')
            ->assertInertia(fn (Assert $page) => $page
                ->has('holders.data', 4)
            );
    }

    public function test_holder_can_be_deleted()
    {
        $this->signIn(true);
        $this->withoutExceptionHandling();

        $holder = Holder::factory()->create();

        $path = route('holders.edit', $holder->id) . '?trashed=with';

        $this->get($path);

        $this->delete(route('holders.destroy', $holder->id))
            ->assertRedirect($path);

        $this->get($path)
            ->assertInertia(fn (Assert $page) => $page
                ->where('holder.deleted_at', function($val){
                    return !is_null($val);
                })
            );
    }
}

<?php

namespace Tests\Feature;

use App\Models\Contact;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class ContactTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function test_contacts_can_be_viewed_by_admins(): void
    {
        $this->signInAdmin();

        Contact::factory(3)->create();

        $this->get(route('contacts.index'))
            ->assertOk()
            ->assertInertia(
                fn(Assert $page) => $page
                    ->component('Contacts/Index')
                    ->has('contacts.data', 3)
            );
    }

    public function test_contact_is_serialized_properly(): void
    {
        $this->signInAdmin();

        $contact = Contact::factory()->create();
        $this->assertDatabaseHas('contacts', [
            'id' => $contact->id
        ]);

        $this->get(route('contacts.edit', $contact->id))
            ->assertOk()
            ->assertInertia(
                fn(Assert $page) => $page
                    ->component('Contacts/Edit')
                    ->has('contact.name')
                    ->has('contact.address')
                    ->has('contact.notes')
                    ->has('contact.id')
                    ->has('contact.deleted_at')
            );
    }

    public function test_can_search_for_contacts(): void
    {
        $this->signInAdmin();
        $this->withoutExceptionHandling();

        $contact = Contact::factory()->create(['name' => 'John Doe']);
        Contact::factory()->create(['name' => 'Jane Doe']);

        $this->get('contacts?search=John')->assertInertia(
            fn(Assert $page) => $page
                ->where('filters.search', 'John')
                ->has('contacts.data', 1)
                ->where('contacts.data.0.address', $contact->address)
        );
    }

    public function test_an_admin_can_edit_contacts(): void
    {
        $this->signInAdmin();
        $this->withoutExceptionHandling();

        $contact = Contact::factory()->create(['name' => 'John Doe']);

        $this->get(route('contacts.edit', $contact->id))->assertInertia(
            fn(Assert $page) => $page->component('Contacts/Edit')
        );

        $this->put(route('contacts.update', $contact->id), [
            'name' => 'Jane Doe',
            'address' => $contact->address
        ])->assertRedirect(route('contacts.edit', $contact->id));

        $this->assertEquals('Jane Doe', $contact->fresh()->name);
    }

    public function test_cannot_view_deleted_contacts(): void
    {
        $this->signInAdmin();

        $contacts = Contact::factory(4)->create(['name' => 'John Doe']);
        $contacts->first()->delete();

        $this->get(route('contacts.index'))->assertInertia(
            fn(Assert $page) => $page->has('contacts.data', 3)
        );
    }

    public function test_can_search_by_deleted_contacts(): void
    {
        $this->signInAdmin();
        $this->withoutExceptionHandling();

        $contacts = Contact::factory(4)->create(['name' => 'John Doe']);
        $contacts->first()->delete();

        $this->get('contacts?trashed=with')->assertInertia(
            fn(Assert $page) => $page->has('contacts.data', 4)
        );
    }

    public function test_contact_can_be_deleted(): void
    {
        $this->signInAdmin();
        $this->withoutExceptionHandling();

        $contact = Contact::factory()->create();

        $path = route('contacts.edit', $contact->id) . '?trashed=with';

        $this->get($path);

        $this->delete(route('contacts.destroy', $contact->id))->assertRedirect(
            $path
        );

        $this->get($path)->assertInertia(
            fn(Assert $page) => $page->where(
                'contact.deleted_at',
                fn($val) => !is_null($val)
            )
        );
    }

    public function test_contact_can_be_created(): void
    {
        $this->signInAdmin();
        $this->withoutExceptionHandling();

        $contact = [
            'name' => $this->faker->name(),
            'address' => $this->faker->address(),
            'notes' => $this->faker->paragraph()
        ];

        $this->post(route('contacts.store'), $contact)
            ->assertRedirect(
                route('contacts.index')
            );

        $this->get(route('contacts.edit', Contact::orderBy('id', 'desc')->first()->id))
            ->assertInertia(
                fn(Assert $page) => $page
                    ->component('Contacts/Edit')
                    ->has('contact.name')
                    ->has('contact.address')
                    ->has('contact.notes')
            );
    }

    public function test_can_view_create_form(): void
    {
        $this->signInAdmin();

        $this->get(route('contacts.create'))
            ->assertOk()
            ->assertInertia(fn(Assert $page) => $page->component('Contacts/Create'));
    }

    public function test_can_view_contact_show_page(): void
    {
        $this->signInAdmin();

        $contact = Contact::factory()->create();

        $this->get(route('contacts.show', $contact->id))
            ->assertOk()
            ->assertInertia(
                fn(Assert $page) => $page
                    ->component('Contacts/Show')
                    ->has('contact.name')
                    ->has('contact.id')
            );
    }

    public function test_can_restore_contact(): void
    {
        $this->signInAdmin();
        $this->withoutExceptionHandling();

        $contact = Contact::factory()->create();
        $contact->delete();

        $this->assertSoftDeleted('contacts', ['id' => $contact->id]);

        $this->put(route('contacts.restore', $contact->id))
            ->assertRedirect();

        $this->assertNotSoftDeleted('contacts', ['id' => $contact->id]);
    }

    public function test_name_is_required_on_create(): void
    {
        $this->signInAdmin();

        $this->post(route('contacts.store'), [
            'name' => '',
            'address' => $this->faker->address(),
        ])->assertSessionHasErrors('name');
    }

    public function test_name_must_be_at_least_3_chars_on_create(): void
    {
        $this->signInAdmin();

        $this->post(route('contacts.store'), [
            'name' => 'ab',
            'address' => $this->faker->address(),
        ])->assertSessionHasErrors('name');
    }

    public function test_address_is_required_on_create(): void
    {
        $this->signInAdmin();

        $this->post(route('contacts.store'), [
            'name' => $this->faker->name(),
            'address' => '',
        ])->assertSessionHasErrors('address');
    }

    public function test_address_must_be_at_least_3_chars_on_create(): void
    {
        $this->signInAdmin();

        $this->post(route('contacts.store'), [
            'name' => $this->faker->name(),
            'address' => 'ab',
        ])->assertSessionHasErrors('address');
    }

    public function test_name_is_required_on_update(): void
    {
        $this->signInAdmin();

        $contact = Contact::factory()->create();

        $this->put(route('contacts.update', $contact->id), [
            'name' => '',
            'address' => $contact->address,
        ])->assertSessionHasErrors('name');
    }

    public function test_address_is_required_on_update(): void
    {
        $this->signInAdmin();

        $contact = Contact::factory()->create();

        $this->put(route('contacts.update', $contact->id), [
            'name' => $contact->name,
            'address' => '',
        ])->assertSessionHasErrors('address');
    }

    public function test_index_returns_json_for_api_requests(): void
    {
        $this->signInAdmin();

        Contact::factory(5)->create();

        $this->getJson(route('contacts.index'))
            ->assertOk()
            ->assertJsonCount(5);
    }
}

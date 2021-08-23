<?php

namespace Tests\Feature;

use App\Models\Contact;
use App\Models\Policy;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Inertia\Testing\Assert;
use Tests\TestCase;

class ContactTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function test_contacts_cannot_be_viewed_by_non_admins()
    {
        $this->signIn();

        $this->get(route('contacts'))->assertStatus(403);
    }

    public function test_contacts_can_be_viewed_by_admins()
    {
        $this->signIn(true);

        Contact::factory(3)->create();

        $this->get(route('contacts'))->assertInertia(
            fn(Assert $page) => $page
                ->component('Contacts/Index')
                ->has('contacts.data', 3)
        );
    }

    public function test_can_search_for_contacts()
    {
        $this->signIn(true);
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

    public function test_an_admin_can_edit_contacts()
    {
        $this->signIn(true);
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

    public function test_cannot_view_deleted_contacts()
    {
        $this->signIn(true);

        $contacts = Contact::factory(4)->create(['name' => 'John Doe']);
        $contacts->first()->delete();

        $this->get(route('contacts'))->assertInertia(
            fn(Assert $page) => $page->has('contacts.data', 3)
        );
    }

    public function test_can_search_by_deleted_contacts()
    {
        $this->signIn(true);
        $this->withoutExceptionHandling();

        $contacts = Contact::factory(4)->create(['name' => 'John Doe']);
        $contacts->first()->delete();

        $this->get('contacts?trashed=with')->assertInertia(
            fn(Assert $page) => $page->has('contacts.data', 4)
        );
    }

    public function test_contact_can_be_deleted()
    {
        $this->signIn(true);
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

    public function test_contact_can_be_created()
    {
        $this->signIn(true);
        $this->withoutExceptionHandling();

        $contact = [
            'id' => 1,
            'name' => $this->faker->name(),
            'address' => $this->faker->address(),
            'notes' => $this->faker->paragraph()
        ];

        $this->post(route('contacts.store'), $contact)->assertRedirect(
            route('contacts')
        );

        $this->get(route('contacts.edit', 1))->assertInertia(
            fn(Assert $page) => $page
                ->component('Contacts/Edit')
                ->has('contact.name')
                ->has('contact.address')
                ->has('contact.notes')
        );
    }
}

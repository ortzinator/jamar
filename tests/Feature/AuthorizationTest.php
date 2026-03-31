<?php

namespace Tests\Feature;

use App\Models\Contact;
use App\Models\Policy;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthorizationTest extends TestCase
{
    use RefreshDatabase;

    // -------------------------------------------------------------------------
    // Unauthenticated access
    // -------------------------------------------------------------------------

    public function test_guests_are_redirected_from_contacts(): void
    {
        $this->get(route('contacts.index'))->assertRedirect(route('login'));
    }

    public function test_guests_are_redirected_from_policies(): void
    {
        $this->get(route('policies'))->assertRedirect(route('login'));
    }

    public function test_guests_are_redirected_from_users(): void
    {
        $this->get(route('users.index'))->assertRedirect(route('login'));
    }

    // -------------------------------------------------------------------------
    // Employee — permitted actions
    // -------------------------------------------------------------------------

    public function test_employee_can_view_contacts(): void
    {
        $this->signIn();

        $this->get(route('contacts.index'))->assertOk();
    }

    public function test_employee_can_view_policies(): void
    {
        $this->signIn();

        $this->get(route('policies'))->assertOk();
    }

    public function test_employee_can_view_users(): void
    {
        $this->signIn();

        $this->get(route('users.index'))->assertOk();
    }

    public function test_employee_can_create_contact(): void
    {
        $this->signIn();

        $this->get(route('contacts.create'))->assertOk();
    }

    public function test_employee_can_create_policy(): void
    {
        $this->signIn();

        $this->get(route('policies.create'))->assertOk();
    }

    public function test_employee_can_edit_contact(): void
    {
        $this->signIn();
        $contact = Contact::factory()->create();

        $this->get(route('contacts.edit', $contact->id))->assertOk();
    }

    public function test_employee_can_edit_policy(): void
    {
        $this->signIn();
        $policy = Policy::factory()->create();

        $this->get(route('policies.edit', $policy->id))->assertOk();
    }

    // -------------------------------------------------------------------------
    // Employee — forbidden actions
    // -------------------------------------------------------------------------

    public function test_employee_cannot_delete_contact(): void
    {
        $this->signIn();
        $contact = Contact::factory()->create();

        $this->delete(route('contacts.destroy', $contact->id))->assertForbidden();
    }

    public function test_employee_cannot_delete_policy(): void
    {
        $this->signIn();
        $policy = Policy::factory()->create();

        $this->delete(route('policies.destroy', $policy->id))->assertForbidden();
    }

    public function test_employee_cannot_edit_user(): void
    {
        $this->signIn();
        $user = User::factory()->create();

        $this->get(route('users.edit', $user->id))->assertForbidden();
    }

    public function test_employee_cannot_update_user(): void
    {
        $this->signIn();
        $user = User::factory()->create();

        $this->put(route('users.update', $user->id), [
            'name' => $user->name,
            'email' => $user->email,
        ])->assertForbidden();
    }
}

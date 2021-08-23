<?php

namespace Tests\Unit;

use App\Models\Contact;
use App\Models\Policy;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ContactTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_contact_can_have_many_policies()
    {
        $contact = Contact::factory()->create();
        $contact->policies()->attach(Policy::factory()->create());
        $contact->policies()->attach(Policy::factory()->create());

        $this->assertCount(2, $contact->policies);
    }

    public function test_a_contact_can_be_created()
    {
        Contact::factory()->create();

        $this->assertCount(1, Contact::all());
    }
}

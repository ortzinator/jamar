<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ContactTest extends DuskTestCase
{
    public function test_a_user_can_view_index_of_contacts()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/contacts')
                ->waitForInertiaNavigate()
                ->assertSee('Contacts');
        });
    }
}

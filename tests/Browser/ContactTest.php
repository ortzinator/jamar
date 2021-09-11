<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ContactTest extends DuskTestCase
{
    use DatabaseMigrations;

    public function test_a_user_can_view_index_of_contacts()
    {
        $admin = User::factory()->create();
        $admin->assignRole('Super Admin');

        $this->browse(function (Browser $browser) {
            $browser
                ->loginAs(User::find(1))
                ->visit('/contacts')
                ->assertPathIs('/contacts')
                ->waitForInertiaNavigate()
                ->assertSee('Contacts');
        });
    }
}

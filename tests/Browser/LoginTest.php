<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class LoginTest extends DuskTestCase
{
    use DatabaseMigrations;
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testExample()
    {
        User::create([
            'name' => 'Brian Ortiz',
            'email' => 'ortzinator@gmail.com',
            'password' => bcrypt('password')
        ]);

        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/login')
                ->type('email', 'ortzinator@gmail.com')
                ->type('password', 'password')
                ->click('button[type="submit"]')
                ->waitForInertiaNavigate()
                ->assertPathIs('/dashboard');
        });
    }
}

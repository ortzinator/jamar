<?php

namespace Database\Seeders;

use App\Models\Contact;
use App\Models\Policy;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'name' => 'BrianOrtiz',
            'email' => 'ortzinator@gmail.com',
            'role_id' => 3
        ]); //User factory defaults password to "password"

        $contacts = Contact::factory(50)->create();

        $contacts->map(function ($item, $key) {
            Policy::factory()
                ->hasAttached($item)
                ->create();
        });
    }
}

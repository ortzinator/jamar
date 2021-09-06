<?php

namespace Database\Seeders;

use App\Models\Contact;
use App\Models\Policy;
use App\Models\Team;
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
        $user = User::factory()->create([
            'name' => 'Brian Ortiz',
            'email' => 'ortzinator@gmail.com'
        ]); //User factory defaults password to "password"

        $user->switchTeam(
            $user->ownedTeams()->create([
                'name' => 'Admins',
                'personal_team' => false,
                'user_id' => $user->id
            ])
        );

        $user->ownedTeams()->save(
            Team::forceCreate([
                'name' => 'Jamar Agents',
                'personal_team' => false,
                'user_id' => $user->id
            ])
        );

        $contacts = Contact::factory(50)->create();

        $contacts->map(function ($item, $key) {
            Policy::factory()
                ->hasAttached($item)
                ->create();
        });
    }
}

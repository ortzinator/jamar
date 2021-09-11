<?php

namespace Database\Seeders;

use App\Models\Contact;
use App\Models\Policy;
use App\Models\Team;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([PermissionSeeder::class]);

        $user = User::factory()->create([
            'name' => 'Brian Ortiz',
            'email' => 'ortzinator@gmail.com'
        ]); //User factory defaults password to "password"
        $user->assignRole('Super Admin');

        $contacts = Contact::factory(50)->create();

        $contacts->map(function ($item, $key) {
            Policy::factory()
                ->hasAttached($item)
                ->create();
        });
    }
}

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

        User::factory()
            ->create([
                'name' => 'Brian Ortiz',
                'email' => 'ortzinator@gmail.com'
            ])
            ->assignRole('Super Admin');
        User::factory()
            ->create([
                'email' => 'manager@jamar.com'
            ])
            ->assignRole('Manager');
        User::factory()
            ->create([
                'email' => 'employee@jamar.com'
            ])
            ->assignRole('Employee');

        $contacts = Contact::factory(50)->create();

        $contacts->map(function ($item, $key) {
            Policy::factory()
                ->hasAttached($item)
                ->create();
        });
    }
}

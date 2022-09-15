<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

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

        Schema::disableForeignKeyConstraints();
        User::query()->delete();
        Schema::enableForeignKeyConstraints();

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

        $this->call([PolicySeeder::class]);
    }
}

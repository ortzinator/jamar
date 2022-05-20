<?php

namespace Database\Seeders;

use App\Models\Contact;
use App\Models\Policy;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Faker\Generator as Faker;

class PolicySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        Schema::disableForeignKeyConstraints();
        Contact::truncate();
        Policy::truncate();
        DB::table('histories')->truncate();
        DB::table('contact_policy')->truncate();
        Schema::enableForeignKeyConstraints();

        $count = 500;
        $chunkSize = 500;

        $contacts = Contact::factory()
            ->count($count)
            ->make([
                'created_at' => now(),
                'updated_at' => now()
            ]);
        $agent = User::first(['id'])->id;

        DB::transaction(function () use ($contacts, $faker, $agent, $count, $chunkSize) {
            $contactChunks = $contacts->chunk($chunkSize);
            $contactChunks->each(function ($chunk) use ($faker, $agent) {
                DB::table('contacts')->insert($chunk->toArray());
            });

            $policies = Collection::times($count, function ($num) use ($faker, $agent) {
                return array_merge(Policy::factory()->definition(), [
                    'agent_id' => $agent,
                    'created_at' => now(),
                    'updated_at' => now()
                ]);
            });
            $policyChunks = $policies->chunk($chunkSize);
            $policyChunks->each(function ($chunk) {
                DB::table('policies')->insert($chunk->toArray());
            });

            $pivots = Collection::times($count, function ($num) {
                return [
                    'created_at' => now(),
                    'updated_at' => now(),
                    'contact_id' => $num,
                    'policy_id' => $num
                ];
            });
            $pivotChunks = $pivots->chunk($chunkSize);
            $pivotChunks->each(function ($chunk) {
                DB::table('contact_policy')->insert($chunk->toArray());
            });
        });
    }
}

<?php

namespace Database\Seeders;

use App\Models\Contact;
use App\Models\History;
use App\Models\Policy;
use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class PolicySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        Contact::query()->delete();
        Policy::query()->delete();
        History::query()->delete();
        DB::table('contact_policy')->delete();
        Schema::enableForeignKeyConstraints();

        $count = 1000;
        $chunkSize = 500;

        DB::transaction(function () use ($count, $chunkSize) {
            $contacts = collect(
                Contact::factory()
                    ->count($count)
                    ->raw()
            );

            $contactChunks = $contacts->chunk($chunkSize);
            $contactChunks->each(function ($chunk) {
                DB::table('contacts')->insert($chunk->toArray());
            });

            $policies = collect(
                Policy::factory()
                    ->count($count)
                    ->raw()
            );
            $policyChunks = $policies->chunk($chunkSize);
            $policyChunks->each(function ($chunk) {
//                DB::table('policies')->insert($chunk->toArray());
//                dd($chunk->toArray());
                $chunk->each(function ($policy) {
                    Policy::create($policy);
                });
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

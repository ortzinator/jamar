<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PolicyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'number' => $this->faker->unique()->regexify('[A-Za-z0-9]{8}'),
            'period_start' => now()->subDays(rand(0, 10)),
            'period_end' => now()->addDays(rand(5, 10)),
            'agent_id' => User::first() ?: 1,
            'currency' => 'PHP',
            'premium' => $this->faker->randomNumber(4),
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}

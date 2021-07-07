<?php

namespace Database\Factories;

use App\Models\Policy;
use Illuminate\Database\Eloquent\Factories\Factory;

class PolicyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Policy::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'number' => $this->faker->regexify('[A-Za-z0-9]{8}'),
            'period_start' => now()->subDays(rand(0, 10)),
            'period_end' => now()->addDays(rand(5, 10)),
            'fields' => json_encode([]),
        ];
    }
}

<?php

namespace Database\Factories;

use App\Models\History;
use App\Models\Policy;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class HistoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = History::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'message' => $this->faker->sentence(),
            'policy_id' => Policy::factory(),
            'user_id' => User::factory(),
            'event_type' => 'note'
        ];
    }
}

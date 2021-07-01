<?php

namespace Database\Factories;

use App\Models\PolicyField;
use Illuminate\Database\Eloquent\Factories\Factory;

class PolicyFieldFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PolicyField::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'value' => $this->faker->word,
            'is_protected' => true,
        ];
    }

    public function custom()
    {
        return $this->state(function (array $attributes) {
            return [
                'is_protected' => false,
            ];
        });
    }
}

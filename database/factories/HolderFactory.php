<?php

namespace Database\Factories;

use App\Models\Holder;
use Illuminate\Database\Eloquent\Factories\Factory;

class HolderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Holder::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'address' => $this->faker->address,
            'notes' => $this->faker->paragraph
        ];
    }
}

<?php

namespace Database\Factories;

use App\Models\Model;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Category::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $name = $this->faker->sentence(rand(3,7));
        $level = 'N'.rand(1, 3);
        return [
            'name' => $name,
            'level' => $level,
        ];
    }
}

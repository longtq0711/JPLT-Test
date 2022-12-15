<?php

namespace Database\Factories;

use App\Models\Test;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class TestFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Test::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {   
        $title = $this->faker->sentence(rand(3,7));
        return [
            'title' => $title,
            'category_id' => rand(1,10),
            'description' => $this->faker->text(200),
        ];
    }
}

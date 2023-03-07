<?php

namespace Database\Factories;

use App\Models\ListModel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ListWord>
 */
class ListWordFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $allLists = ListModel::all();
        return [
            'word' => $this->faker->word,
            'sentence' => $this->faker->sentence,
            'list_id' => $allLists->random()->id,
        ];
    }
}

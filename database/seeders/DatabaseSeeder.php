<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Question;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {   
        $this->call([
            UserSeeder::class,
            CategorySeeder::class,
            TestSeeder::class,
            QuestionSeeder::class,
            UserAnswerSeeder::class,
            ScoreSeeder::class,
            AdminsTableSeeder::class
        ]);
        
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'name' => '読解',
                'level' => 'N1',
            ],
            [
                'name' => '読解',
                'level' => 'N2',
            ],
            [
                'name' => '読解',
                'level' => 'N3',
            ],
            [
                'name' => '読解',
                'level' => 'N4',
            ],
            [
                'name' => '読解',
                'level' => 'N5',
            ],
            [
                'name' => '聴解',
                'level' => 'N1',
            ],
            [
                'name' => '聴解',
                'level' => 'N2',
            ],
            [
                'name' => '聴解',
                'level' => 'N3',
            ],
            [
                'name' => '聴解',
                'level' => 'N4',
            ],
            [
                'name' => '聴解',
                'level' => 'N5',
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N1',
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N2',
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N3',
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N4',
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N5',
            ],
        ];
        
        DB::table('categories')->insert($categories);
    }
}

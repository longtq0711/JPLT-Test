<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class TestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tests = [];
        foreach (range(1, 15) as $item) {
            $level = $item % 5 == 0 ? '5' : $item % 5;
            array_push($tests,
                [
                    'title' => 'Test1',
                    'category_id' => $item,
                    'description' => '',
                    'slug' => 'N'.$level.'-'.$item.'-test-1',
                    'finished_at' => now()
                ],
                [
                    'title' => 'Test2',
                    'category_id' => $item,
                    'description' => '',
                    'slug' => 'N'.$level.'-'.$item.'-test-2',
                    'finished_at' => now()
                ],
                [
                    'title' => 'Test3',
                    'category_id' => $item,
                    'description' => '',
                    'slug' => 'N'.$level.'-'.$item.'-test-3',
                    'finished_at' => now()
                ]
            );
        }
        
        DB::table('tests')->insert($tests);
    }
}

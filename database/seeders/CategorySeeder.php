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
        DB::table('users')->insert(
            [
                'name' => Str::random(10),
                'level' => 'N1',
            ],
            [
                'name' => Str::random(10),
                'level' => 'N2',
            ],
            [
                'name' => Str::random(10),
                'level' => 'N3',
            ],
            [
                'name' => Str::random(10),
                'level' => 'N4',
            ],
            [
                'name' => Str::random(10),
                'level' => 'N5',
            ],
        );
    }
}

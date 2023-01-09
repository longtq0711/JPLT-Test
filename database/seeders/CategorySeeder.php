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
                'type' => ' '
            ],
            [
                'name' => '読解',
                'level' => 'N2',
                'type' => ' '
            ],
            [
                'name' => '読解',
                'level' => 'N3',
                'type' => ' '
            ],
            [
                'name' => '読解',
                'level' => 'N4',
                'type' => ' '
            ],
            [
                'name' => '読解',
                'level' => 'N5',
                'type' => ' '
            ],
            [
                'name' => '聴解',
                'level' => 'N1',
                'type' => ' '
            ],
            [
                'name' => '聴解',
                'level' => 'N2',
                'type' => ' '
            ],
            [
                'name' => '聴解',
                'level' => 'N3',
                'type' => ' '
            ],
            [
                'name' => '聴解',
                'level' => 'N4',
                'type' => ' '
            ],
            [
                'name' => '聴解',
                'level' => 'N5',
                'type' => ' '
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N1',
                'type' => '漢字の読み方'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N2',
                'type' => '漢字の読み方'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N3',
                'type' => '漢字の読み方'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N4',
                'type' => '漢字の読み方'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N5',
                'type' => '漢字の読み方'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N1',
                'type' => '表記'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N2',
                'type' => '表記'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N3',
                'type' => '表記'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N4',
                'type' => '表記'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N5',
                'type' => '表記'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N1',
                'type' => '文脈規定'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N2',
                'type' => '文脈規定'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N3',
                'type' => '文脈規定'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N4',
                'type' => '文脈規定'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N5',
                'type' => '文脈規定'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N1',
                'type' => '言い換かえ類語'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N2',
                'type' => '言い換かえ類語'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N3',
                'type' => '言い換かえ類語'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N4',
                'type' => '言い換かえ類語'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N5',
                'type' => '言い換かえ類語'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N1',
                'type' => '用法'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N2',
                'type' => '用法'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N3',
                'type' => '用法'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N4',
                'type' => '用法'
            ],
            [
                'name' => 'ごい・文法',
                'level' => 'N5',
                'type' => '用法'
            ]
        ];
        
        DB::table('categories')->insert($categories);
    }
}

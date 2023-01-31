<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $admins = [
            [
                'username' => 'admin',
                'email' => 'admin@gmail.com',
                'password' => bcrypt('password'),
                'created_at' => now()
            ],
        ];
        DB::table('admins')->insert($admins);
    }
}

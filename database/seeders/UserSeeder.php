<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        \App\Models\User::insert([
            'name' => 'Tran Quang Nam',
            'email' => 'nam.tq@gmail.com',
            'email_verified_at' => now(),
            'type' => 'teacher',
            'password' => bcrypt('password'),
            'remember_token' => Str::random(10),
        ]);
        // \App\Models\User::factory(10)->create();
    }
}

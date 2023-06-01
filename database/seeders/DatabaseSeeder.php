<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Hash;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create(
            [
                'name'=> 'Supper Admin',
                'email' => 'admin@gmail.com',
                'password' => Hash::make(123456)
            ]
        ); 
    
    }
}
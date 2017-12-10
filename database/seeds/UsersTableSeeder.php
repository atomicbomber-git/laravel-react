<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table("users")->insert([
            "name" => "James Patrick Keegan",
            "email" => "admin@admin.com",
            "password" => bcrypt("alohomora")
        ]);
    }
}

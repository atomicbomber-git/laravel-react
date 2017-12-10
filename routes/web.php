<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Faker\Factory;

Route::get('/', function () {
    return view('welcome');
});

Route::get("/api/{amount}", function($amount) {
    $faker = Factory::create();

    $items = [];
    for ($i=0; $i < $amount; $i++) { 
        $items[] = [
            "key" => $i,
            "name" => $faker->name
        ];
    }
    
    return $items;

})->name("api");

Route::view("/test", "test");

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

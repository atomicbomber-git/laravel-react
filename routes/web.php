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

Route::get('/', function () {
    return view('welcome');
});

Route::get("/api", function() {
    return [
        ["key" => 1, "name" => "Robert"],
        ["key" => 2, "name" => "Johnny"],
        ["key" => 3, "name" => "Faustus"]
    ];
})->name("api");

Route::view("/test", "test");

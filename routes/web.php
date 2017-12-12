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

Auth::routes();

Route::prefix("/user")->group(function() {

    Route::middleware("auth")->group(function() {
        Route::get("/{user}/timeline", "UserController@timeline")->name("user.timeline");
        Route::get("/{user}/feed", "UserController@feed")->name("user.feed");
        Route::post("/{user}/createPost", "UserController@createPost")->name("user.post.create");        
    });

});
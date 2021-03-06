<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ["title", "content", "user_id"];

    public function poster()
    {
        return $this->belongsTo("App\User", "user_id")
            ->withDefault(["id"=> null, "name" => "User"]);
    }
}

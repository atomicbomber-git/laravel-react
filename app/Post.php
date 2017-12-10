<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function poster()
    {
        return $this->belongsTo("App\User")
            ->withDefault(["id"=> null, "name" => "User"]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Post;
use App\Http\Resources\Post as PostResource;

class UserController extends Controller
{
    public function timeline(User $user)
    {
        return view("user.timeline", ["user" => $user]);
    }

    public function feed()
    {
        return PostResource::collection(
            Post::orderBy("created_at", "desc")
                ->limit(5)
                ->get()
        );
    }

    public function createPost(User $user)
    {
        $data = request()->validate([
            "title" => "required|string",
            "content" => "required|string"
        ]);

        $user->posts()->create($data);

        return response([
            "status" => "success"
        ]);
    }
}

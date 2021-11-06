<?php

namespace App\Http\Controllers;


use App\Models\Post;
use App\Models\Topic;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::User();

        if ($user) {

            $followings = $user->followings;
            $topicIds = $user->followings->pluck('id')->toArray();
            $posts = Post::whereIn('topic_id', $topicIds)->orderBy('created_at', 'DESC')->get();
            $response = [
                'posts' => $posts,
            ];
            // return view('dashboard')->with('posts', $posts);
            return response($response, 200);
        } else {
            return response()->json('nothing to show');
        }
        // dd($user);
    }

    // public function index()
    // {
    //     $user = User::all();
    //     $user->toArray();
    //     return response()->json($user);
    // }
}

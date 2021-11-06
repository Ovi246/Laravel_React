<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        // $user = Auth::user();
        return view('user.index');
    }

    public function show()
    {
        $user = Auth::user();
        return response()->json($user);
    }


    public function edit(User $user)
    {
        $user = Auth::user();
        return view('user.edit', compact('user'));
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->name = $request->get('name');
        $user->username = $request->get('username');
        $user->email = $request->get('email');
        $user->password = $request->get('password');
        $user->save();
        return redirect('user')->with('success', 'Profile updated!');
    }

    public function followings(User $user)
    {
        $user = Auth::user();
        $followings = $user->followings;
        // return view('user.followings', compact('followings'));
        $response = ['data' => $followings];
        return response()->json($response, 200);
    }

    public function followUnfollow(User $user, $tname)
    {
        $user = Auth::user();
        $isFollowing = $user->followings->contains($tname);
        // return view('user.followings', compact('followings'));
        return response()->json($isFollowing);
    }
}

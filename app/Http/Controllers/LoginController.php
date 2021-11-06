<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function index()
    {
        return view('auth.login');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $authUser = auth()->attempt($request->only('email', 'password'));
        $user = auth()->user();

        if (!$authUser) {
            return response([
                'message' => 'Bad Credentials'
            ], 401);
        } else {
            $token = auth()->user()->createToken('myapptoken')->plainTextToken;
            $response = [
                'user' => $user,
                'token' => $token
            ];
        };
        return response($response, 201);

        // return redirect()->route('dashboard');
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request){
        $credentials = $request->only('email', 'password');
    
        if (Auth::attempt($credentials)) {
            $user = $request->user();
            $token = $user->createToken('Access Token')->plainTextToken;
    
            return response()->json([
                'access_token' => $token,
                'token_type' => 'bearer',
                'redirect' => '/admin'
            ]);
        } else {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
    }
    public function logOut()
    {
        Auth::logout();
    }
}

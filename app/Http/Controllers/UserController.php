<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\User;

class UserController extends Controller
{
    public function getUserList() {
        $data = User::orderBy('name', 'asc')->get();
        return response(['data' => $data], 200);
    }
}

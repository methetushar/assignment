<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function frontend_app()
    {
        return view('layouts.frontend_app');
    }
}

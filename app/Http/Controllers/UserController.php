<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    // dashboard
    public function index()
    {
        return Inertia::render('DashboardComponent');
    }

    // about
    public function about()
    {
        return Inertia::render('AboutComponent');
    }

    // contact
    public function contact()
    {
        return Inertia::render('ContactComponent');
    }
}

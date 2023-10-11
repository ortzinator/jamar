<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Administrator
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): void
    {
        // if (Auth::check() && Auth::user()->isAdmin()) {
        //     return $next($request);
        // }

        // redirect(route('login'));
    }
}

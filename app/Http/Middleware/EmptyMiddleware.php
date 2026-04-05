<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EmptyMiddleware
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Request
    {
        $response = $next($request);
        if (is_null($response->original) && $response->status() == 200) {
            abort(404);
        }

        return $response;
    }
}

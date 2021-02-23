<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EmptyMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);
        if (is_null($response->original) && $response->status() == 200) {
            abort('404');
        }
        return $response;
    }
}

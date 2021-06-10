<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Super
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {  $user = auth()->user();
        // dd('xx');
        if(empty($user) || !$user->hasRole('super')){
            return response()->json(['message' => 'Unauthenticated. super role required'], 401);
        }
        return $next($request);
    }
}

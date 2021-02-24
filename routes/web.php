<?php

use App\Http\Controllers\HolderController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
    return redirect('/login');
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('holders', [HolderController::class, 'index'])
        ->name('holders');

    Route::get('/holders/{holder}/edit', [HolderController::class, 'edit'])
        ->name('holders.edit');

    Route::put('/holders/{holder}', [HolderController::class, 'update'])
        ->name('holders.update');

    Route::delete('holders/{contact}', [HolderController::class, 'destroy'])
        ->name('holders.destroy');
});
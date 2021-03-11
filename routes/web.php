<?php

use App\Http\Controllers\HolderController;
use App\Http\Controllers\PolicyController;
use App\Http\Controllers\PolicyFieldController;
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
    return redirect('/dashboard');
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Holders
    Route::get('holders', [HolderController::class, 'index'])
        ->name('holders');

    Route::get('/holders/{holder}/edit', [HolderController::class, 'edit'])
        ->name('holders.edit');
        
    Route::put('/holders/{holder}', [HolderController::class, 'update'])
        ->name('holders.update');
        
    Route::delete('holders/{holder}', [HolderController::class, 'destroy'])
        ->name('holders.destroy');
        
    Route::put('holders/{holder}/restore', [HolderController::class, 'restore'])
        ->name('holders.restore');

    // Policy
    Route::get('/policies', [PolicyController::class, 'index'])
        ->name('policies');

    Route::get('/policies/create', [PolicyController::class, 'create'])
        ->name('policies.create');
        
    Route::get('/policies/{policy}', [PolicyController::class, 'show'])
        ->name('policies.show');

    Route::get('/policies/{policy}/edit', [PolicyController::class, 'edit'])
        ->name('policies.edit');

    Route::put('/policies/{policy}', [PolicyController::class, 'update'])
        ->name('policies.update');
        
    //PolicyFields
    Route::post('/policyfield', [PolicyFieldController::class, 'store'])
        ->name('policyfield.store');

    Route::delete('/policyfield/{policyField}', [PolicyFieldController::class, 'destroy'])
        ->name('policyfield.destroy');

    Route::post('/policyfield/{policyField}', [PolicyFieldController::class, 'update'])
        ->name('policyfield.update');
        
});
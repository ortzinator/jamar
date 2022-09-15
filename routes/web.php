<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\PolicyController;
use App\Http\Controllers\UserController;
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

Route::get('/test', function () {
    return '<html><body>testing123</body></html>';
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Contacts
    Route::get('contacts', [ContactController::class, 'index'])->name('contacts');

    Route::get('contacts/create', [ContactController::class, 'create'])->name('contacts.create');

    Route::post('contacts', [ContactController::class, 'store'])->name('contacts.store');

    Route::get('/contacts/{contact}/edit', [ContactController::class, 'edit'])->name(
        'contacts.edit'
    );

    Route::put('/contacts/{contact}', [ContactController::class, 'update'])->name(
        'contacts.update'
    );

    Route::delete('contacts/{contact}', [ContactController::class, 'destroy'])->name(
        'contacts.destroy'
    );

    Route::put('contacts/{contact}/restore', [ContactController::class, 'restore'])->name(
        'contacts.restore'
    );

    // Policy
    Route::get('/policies', [PolicyController::class, 'index'])->name('policies');

    Route::get('/policies/create', [PolicyController::class, 'create'])->name('policies.create');

    Route::post('/policies', [PolicyController::class, 'store'])->name('policies.store');

    Route::get('/policies/ending-soon', [PolicyController::class, 'endingSoon'])->name(
        'policies.ending'
    );

    Route::get('/policies/{policy}', [PolicyController::class, 'show'])->name('policies.show');

    Route::get('/policies/{policy}/edit', [PolicyController::class, 'edit'])->name('policies.edit');

    Route::put('/policies/{policy}', [PolicyController::class, 'update'])->name('policies.update');

    Route::put('/policies/{policy}/restore', [PolicyController::class, 'restore'])->name(
        'policies.restore'
    );

    Route::delete('/policies/{policy}', [PolicyController::class, 'destroy'])->name(
        'policies.destroy'
    );

    Route::resource('histories', HistoryController::class);

    Route::resource('users', UserController::class);
});

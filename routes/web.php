<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('projects', ProjectController::class)
        ->only(['index']);

    Route::get('/projects/{project}/tasks', [TaskController::class, 'index'])
    ->name('projects.tasks.index');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Api\ProjectController;

Route::get('/projects', [ProjectController::class, 'index']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

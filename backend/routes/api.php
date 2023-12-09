<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PurchaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(ClientController::class)->group(function () {
    Route::get('/clients','index');
    Route::get('/client/{id}','show');
    Route::post('/client','store');
    Route::put('/client/{id}','update');
    Route::delete('/client/{id}','destroy');
});

Route::controller(ProductController::class)->group(function () {
    Route::get('/products','index');
    Route::get('/product/{id}','show');
    Route::post('/product','store');
    Route::put('/product/{id}','update');
    Route::delete('/product/{id}','destroy');
});

Route::controller(PurchaseController::class)->group(function () {
    Route::get('/purchases','index');
    Route::get('/purchase/{id}','show');
    Route::post('/purchase','store');
    Route::put('/purchase/{id}','update');
    Route::delete('/purchase/{id}','destroy');
});
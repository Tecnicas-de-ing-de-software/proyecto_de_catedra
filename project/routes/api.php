<?php

use App\Http\Controllers\Api\ProductController;

Route::post('/products', [ProductController::class, 'store']); // Endpoint para agregar productos
Route::get('/products', [ProductController::class, 'index']); // Endpoint para mostrar productos

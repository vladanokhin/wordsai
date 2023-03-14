<?php

use App\Http\Controllers\api\ListController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('/lists', ListController::class);
Route::delete('lists/words/{word}', [ListController::class, 'destroyWordOfList']);

<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'HomeController@frontend_app');

Route::get('/get-auth-user',function (){
    $is_loggedin = auth()->check();
    $user = auth()->user();
    return response()->json(['login_status' => $is_loggedin, 'user' => $user]);
})->name('auth_user');
Route::group(['middleware'=> 'auth'], function (){
    Route::get('/dashboard', 'AdminController');
    Route::resource('product',  'ProductController');
    Route::resource('purchase', 'PurchaseController');
    Route::resource('supplier', 'SupplierController');
    Route::resource('stock',    'StockController');
    Route::get('get-suppliers',     'SupplierController@suppliers')->name('suppliers');
    Route::get('get-product',       'ProductController@getProduct')->name('productList');

});

Auth::routes();

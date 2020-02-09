<?php

use Illuminate\Http\Request;

// 会員登録
Route::post('/register', 'Auth\RegisterController@register')->name('register');

// ログイン
Route::post('/login', "Auth\LoginController@login")->name('login');

// ログアウト
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

// ログインユーザー
Route::get('/user', fn () => Auth::user())->name('user');

// 写真投稿
Route::post('/photos', 'PhotoController@create')->name('photo.create');
Route::post('/shops', 'ShopController@create')->name('shop.create');

// 店舗一覧
// Route::get('/photos', 'PhotoController@index')->name('photo.index');
Route::get('/shops', 'ShopController@index')->name('shop.index');

// 店舗詳細
// Route::get('/photos/{id}', 'PhotoController@show')->name('photo.show');
Route::get('/shops/{id}', 'ShopController@show')->name('shop.show');

// レビュー
// Route::post('/photos/{photo}/reviews', 'PhotoController@addReview')->name('photo.review');
Route::post('/shops/{shop}/reviews', 'ShopController@addReview')->name('shop.review');

// いいね
// Route::put('/photos/{id}/like', 'PhotoController@like')->name('photo.like');
Route::put('/shops/{id}/like', 'ShopController@like')->name('shop.like');

// いいね解除
// Route::delete('/photos/{id}/unlike', 'PhotoController@unlike');
Route::delete('/shops/{id}/unlike', 'ShopController@unlike');

// トークンリフレッシュ
Route::get('/reflesh-token', function (Illuminate\Http\Request $request) {
    $request->session()->regenerateToken();

    return response()->json();
});

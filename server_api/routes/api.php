<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function() {
    Route::get('user-list', 'UserController@getUserList');
    Route::post('get-user-conversation', 'ChatController@getUserConversationById');
});

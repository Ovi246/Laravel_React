<?php

use App\Http\Controllers\TopicController;
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


Route::group(['middleware' => ['api']], function () {
    // Route::resource('user', 'UserController');
    // Route::resource('dashboard', 'DashboardController');
    Route::post('/topic/{topic_name}/follow', 'TopicController@followTopic');
});

Route::resource('topics', 'TopicController');
Route::resource('posts', 'PostController');
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    Route::resource('dashboard', 'DashboardController');
    return $request->user();
});

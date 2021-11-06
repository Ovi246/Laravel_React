<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DashboardController;
// use laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

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

Route::get('/react/{any?}', function () {
    return view('React');
})->where('any', '.*');
// Route::get('/', function () {
//     return view('React');
// });

//^(?!api).*$

Route::get('/dashboard/', [DashboardController::class, 'index'])->name('dashboard');
// Route::get('/user/', [UserController::class, 'index'])->name('user');
Route::get('/user/info', [UserController::class, 'edit']);
Route::get('/user/show', [UserController::class, 'show']);
Route::get('/user/showf', [UserController::class, 'followings']);
Route::get('/user/{topic_name}/isfollowing', [UserController::class, 'followUnfollow']);
Route::patch('/user/{id}', [UserController::class, 'update'])->name('userUpdate');
Route::get('/user/topic_followings', [UserController::class, 'followings']);
Route::get('/logout', [LogoutController::class, 'logout'])->name('logout');
Route::get('/register', [RegisterController::class, 'index'])->name('register');
Route::post('/register', [RegisterController::class, 'store']);
Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'store']);
Route::get('/topics', [TopicController::class, 'index'])->name('topics');
Route::get('/topic/{topic_name}', [TopicController::class, 'showTopic']);
Route::post('/topic/{topic_name}/show', [TopicController::class, 'showFollowers'])->name('showFollowers');
Route::get('/topic/{topic_name}/show', [TopicController::class, 'showFollowers']);
Route::post('/topic/{topic_name}/follow', [TopicController::class, 'followTopic'])->name('followTopic');
Route::get('/create_topic', [TopicController::class, 'create']);
Route::post('/create_topic', [TopicController::class, 'store'])->name('storeTopic');
Route::get('/posts', [PostController::class, 'index'])->name('posts');
Route::get('/create_post', [PostController::class, 'create']);
Route::post('/posts', [PostController::class, 'store']);

// Route::post('/login', [AuthenticatedSessionController::class, 'store'])
//     ->middleware(array_filter([
//         'guest:' . config('fortify.guard'),
//         // $limiter ? 'throttle:'.$limiter : null,
//     ]));

<?php

use App\Http\Controllers\Admin\QuestionController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\TestController;
use App\Http\Controllers\MainController;


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

Route::get('/', function () {
    return view('welcome');
});


Route::group(['middleware' => 'auth'], function(){
    Route::get('panel',[MainController::class, 'dashboard'])->name('dashboard');
    Route::get('test/detay/{slug}',[MainController::class, 'test_detail'])->name('test.detail');
    Route::get('tests',[MainController::class, 'test_list'])->name('test.list');
    Route::get('test/{slug}',[MainController::class, 'test'])->name('test.join');
    Route::post('test/{slug}/score',[MainController::class, 'score'])->name('test.score');
    Route::get('test/{slug}/result',[MainController::class, 'test_result'])->name('test.result');
    Route::get('test/{slug}/history',[MainController::class, 'test_history'])->name('test.history');
});


Route::group(
    [
        'middleware' =>  ['auth', 'isAdmin'], 'prefix' => 'admin'
    ],
    function () {
        Route::get('tests/{id}', [TestController::class,'destroy'])->whereNumber('id')->name('tests.destroy');
        Route::get('tests/{id}/details', [TestController::class,'show'])->whereNumber('id')->name('tests.details');
        Route::post('test/{test_id}/questions/{id}', [QuestionController::class,'destroy'])->whereNumber('test_id')->name('questions.destroy');
        Route::resource('tests', TestController::class)->except('destroy');
        Route::resource('test/{test_id}/questions', QuestionController::class)->except('destroy');
    }
);

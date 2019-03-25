<?php

use Illuminate\Http\Request;

// Models
use App\Models\Hero;

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
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// get all heroes with unvirses
Route::get('/heroes', function (Hero $heroModel) {
   $heroes = $heroModel->getHeroesWithUniverses()->get();
   return response()->json($heroes);
})->name('api.heroes');


// vote for some hero
Route::post('/vote/{heroId}', function($heroId, Hero $heroModel){

    $hero = $heroModel::find($heroId);
    $hero->votes += 1;
    $result = $hero->save();

    return response()->json( compact('result') );

})->name('api.vote');

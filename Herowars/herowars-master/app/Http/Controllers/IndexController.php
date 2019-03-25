<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Session;

// Models
use App\Models\Hero;

class IndexController extends Controller
{
    /**
    * @api {GET}         /          Index()
    * @apiDescription               Main page
    * @apiName                      Index()
    * @apiGroup                     IndexController
    */
    public function Index(Hero $heroModel){

      // get heroes with universes names
      $heroes = $heroModel->getHeroesWithUniverses()->get();
      $this->setProcentVotes($heroes);

      $viewArgs = [
        'title_page' => 'High score',
        'heroes'     => $heroes,
      ];

      return view('welcome', $viewArgs);
    }



    /**
    * @api {GET}         /play          playPage()
    * @apiDescription                   Play page
    * @apiName                          playPage()
    * @apiGroup                         IndexController
    */
    public function Play(Hero $heroModel){

      $endplay = false;
      $heroes  = [];

      if (! Session::has('heroes')) {
        $heroes = $heroModel->getHeroesWithUniverses()->get()->toArray();
        Session::put('heroes', $heroes);
      } else {
        $heroes = Session::get('heroes');
      }

      // get random heroes and pop them out of array
      $randIndex = array_rand($heroes);
      $left = $heroes[$randIndex];
      unset($heroes[$randIndex]);

      $randIndex = array_rand($heroes);
      $right = $heroes[$randIndex];
      unset($heroes[$randIndex]);

      // if after all pops on array it will be empty then game is finished
      // or if one of heroes has a endpoint
      if( empty($heroes) || ($left['endpoint'] || $right['endpoint']) ){
        $endplay = true;
        Session::forget('heroes');
      } else {
        Session::put('heroes', $heroes);
      }

      $viewArgs = array_merge(
         ['title_page' => 'Show time'],
         compact('left', 'right', 'endplay')
       );

      return view('play', $viewArgs);
    }



    /**
    *   get array and set to each item part procent  of all votes
    *
    */
    public function setProcentVotes(&$heroes){
       $votes = 0;

       foreach ($heroes as $key => $value) {
          $votes += $value['votes'];
       }

       foreach($heroes as $key => $item) {
         $heroes[$key]['procent'] = $votes ?
                                         intval( ($item['votes'] * 100) / $votes ) :
                                         0;
       }
    }

}

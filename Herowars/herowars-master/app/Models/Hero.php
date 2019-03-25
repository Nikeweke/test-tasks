<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Hero extends Model
{
    public $timestamps = false;

    public function getHeroesWithUniverses(){
      return $this->select('heroes.*', DB::raw('universes.name as universe_name'))
                  ->join('universes', 'universes.id' , '=', 'heroes.universe_id');
    }


    public function getHeroesByUniverse($id){
      return $this->getHeroesWithUniverses()
                  ->where('universe_id', '=', $id);
    }
}

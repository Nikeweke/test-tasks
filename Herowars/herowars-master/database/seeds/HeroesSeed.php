<?php

use Illuminate\Database\Seeder;

class HeroesSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      \DB::table('heroes')->delete();
      \DB::table('heroes')->insert([
          [ 'name' => 'BatMan',       'universe_id' => 1 ],
          [ 'name' => 'The Flash',    'universe_id' => 1, 'endpoint' => 1 ],
          [ 'name' => 'SuperMan',     'universe_id' => 1 ],
          [ 'name' => 'Atom',         'universe_id' => 1 ],
          [ 'name' => 'Wonder Woman', 'universe_id' => 1, 'endpoint' => 1 ],

          [ 'name' => 'Spider Man',  'universe_id' => 2 ],
          [ 'name' => 'Hulk',        'universe_id' => 2 ],
          [ 'name' => 'Thor',        'universe_id' => 2 ],
          [ 'name' => 'Iron Man',    'universe_id' => 2 ],
          [ 'name' => 'Wolverine',   'universe_id' => 2 ],

      ]);

    }
}

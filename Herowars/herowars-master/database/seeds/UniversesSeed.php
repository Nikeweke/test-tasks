<?php

use Illuminate\Database\Seeder;

class UniversesSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      \DB::table('universes')->delete();
      \DB::table('universes')->insert([
          [ 'id' => 1, 'name' => 'Marvel'],
          [ 'id' => 2, 'name' => 'DC' ],
      ]);
    }
}

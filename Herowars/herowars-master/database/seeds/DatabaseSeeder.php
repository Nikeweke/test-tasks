<?php

use Illuminate\Database\Seeder;

use Database\Seeds\HeroesSeed;
use Database\Seeds\UniversesSeed;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call('HeroesSeed');
        $this->call('UniversesSeed');
    }
}

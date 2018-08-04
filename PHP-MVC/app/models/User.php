<?php
/*
*   User.php
*
*
*/

namespace App\Models;

use Config\Database;

class User extends Database {


    /*
    |--------------------------------------------------------------------------
    |  Все пользователи
    |--------------------------------------------------------------------------
    */
     public function getUsers(){
        return parent::connect()->query("SELECT * FROM users");
     }
}

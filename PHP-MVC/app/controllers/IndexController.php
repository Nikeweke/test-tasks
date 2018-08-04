<?php
/*
*   IndexController.php
*
*
*/

namespace App\Controllers;

// Models
use App\Models\User;

class IndexController extends Controller {

    /*
    |--------------------------------------------------------------------------
    |  Главная страница  {GET}   /
    |--------------------------------------------------------------------------
    */
     public function Index(){

      // parent::Index();
       $userModel = new User();

       $users = $userModel->getUsers();

       $viewArgs = [
          'title' => 'MVC-PHP',
          'users' => $users
       ];

       include 'views/welcome.php';
     }


     /*
     |--------------------------------------------------------------------------
     |  Инфо  {GET}   /data
     |--------------------------------------------------------------------------
     */
     public function Second(){
       // parent::Index();
       echo "Data";
     }

}

<?php
/*
*   routes.php
*
*
*/

class Routes {

    // fields
    static private $route;
    static private $method;

    /*
    |--------------------------------------------------------------------------
    | set fields
    |--------------------------------------------------------------------------
    */
    static function set(){
       self::$route  = $_SERVER['REQUEST_URI'];
       self::$method = $_SERVER['REQUEST_METHOD'];
    }


    static function test($route, $method, $test){
      echo $route;
      echo $method;
      echo $test;
    }



    /*
    |--------------------------------------------------------------------------
    | GET
    |--------------------------------------------------------------------------
    */
     static function GET($route, $controller, $function) {


//     echo 'self method -- ' . self::$method . '<br />';
// echo 'self $route -- ' . self::$route. '<br />';
// echo '$method -- ' . 'GET'. '<br />';
// echo '$route -- ' . $route. '<br />';
// echo '<br />';


        self::findController($route, 'GET', $controller, $function);
     }



    /*
    |--------------------------------------------------------------------------
    | POST
    |--------------------------------------------------------------------------
    */
    static function POST(){
     self::findController($route, 'POST', $controller, $function);
    }



    /*
    |--------------------------------------------------------------------------
    | PUT
    |--------------------------------------------------------------------------
    */
    static function PUT(){
      self::findController($route, 'PUT', $controller, $function);
    }

    /*
    |--------------------------------------------------------------------------
    | DELETE
    |--------------------------------------------------------------------------
    */
    static function DELETE(){
      self::findController($route, 'DELETE', $controller, $function);
    }



    /*
    |--------------------------------------------------------------------------
    | Находим и запускаем метод из контроллера
    |--------------------------------------------------------------------------
    */
    static function findController($route, $method, $controller, $function){
      // устанвливаем метод и запрос
       self::set();

       // запуск метода из контроллера
       if (self::$method == $method && self::$route == $route) {
        self::launch($controller, $function);
       }

      // если маршрут не совпадает
       // elseif(self::$route != $route){
       //     self::showNotFound();
       // }
       //
       // // если метод не совпадает
       // elseif(self::$method != 'GET'){
       //     self::showWrongMethod();
       // }
    }


    /*
    |--------------------------------------------------------------------------
    | Запускаем метод
    |--------------------------------------------------------------------------
    */
    static function launch($controller, $function){
      $controller = 'App\Controllers\\' . $controller;
      (new $controller)->$function();
      exit;  // если убрать то будут читаться все маршруты, а это значит что будут выводиться ошибки
    }



    /*
    |--------------------------------------------------------------------------
    | Show wrong Method Page
    |--------------------------------------------------------------------------
    */
    static function showWrongMethod(){
       include 'views/errors/405.php';
       exit;
    }



    /*
    |--------------------------------------------------------------------------
    | Show Not Found 404 Page
    |--------------------------------------------------------------------------
    */
    static function showNotFound(){
      include 'views/errors/404.php';
      exit;
    }

}

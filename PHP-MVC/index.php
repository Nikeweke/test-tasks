<?php
/*
*  index.php
*
*  Точка входа
*/
include 'config/bootstrap.php';




/*
|--------------------------------------------------------------------------
|  МАРШРУТЫ
|--------------------------------------------------------------------------
*/
Routes::GET('/',     'IndexController', 'Index');
Routes::GET('/data', 'IndexController', 'Second');

<?php
// Класс для работы с маршрутами
include 'config/routes.php';

// Класс для работы с DB
include 'config/database.php';

// Autoloader
spl_autoload_register(function($class_name){
	$filename = './'.$class_name.'.php';
	   // echo $filename. PHP_EOL;
	 include($filename);
});

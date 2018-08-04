<?php

namespace Config;

use PDO;

class Database {

  private $host     = "localhost";
  private $user     = "root";
  private $password = "";
  private $db_name  = "test";

  // protected $conn;


  /*
  |--------------------------------------------------------------------------
  | __construct
  |--------------------------------------------------------------------------
  */
  public function __construct($host = false, $user = false, $password = false, $db_name = false){

    if(! empty($host)){
      $this->host     = $host;
      $this->user     = $user;
      $this->password = $password;
      $this->db_name  = $db_name;
    }


  }



  /*
  |--------------------------------------------------------------------------
  | Make connection
  |--------------------------------------------------------------------------
  */
  public function connect()
   {
  	 $db = new PDO("mysql:host=$this->host;dbname=$this->db_name", $this->user, $this->password);
  	 $db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
     $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
  	 $db->exec("SET NAMES utf8");

     if($db == true){ return $db; }
  	 else           { die('Cant connect to DB'); }
   }


}

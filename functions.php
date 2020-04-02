<?php
session_start();

function openDB(){
    //$servername = "xxxxx.xxxxx.com"; live host
	//$username = "root"; live host
	//$password = "root"; live host
	$username = "root";
	$password = "root";
	$dbname = "game1";
	$charset = 'utf8';	

	// $db = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password); live host
    $db = new PDO("mysql:host=localhost;dbname=$dbname; charset=$charset", $username, $password);
	if ($db != true){
    die("Unable to open DB ");
    }
    return($db);             
}

function createTables(){
    $db=openDB();

    $sql ="DROP TABLE IF EXISTS user, gamePeople, gameVintage, gameCartoons, gameJCCO";
    $result = $db->query($sql);
      If ( $result != true){
          die("<br>Unable to drop tables<br>");
      }
      else{
          ECHO "<br>Tables dropped<br>";                
      }

//////////////////////////////////// NEW TABLES //////////////////////////////////// 

// USER TABLE
    $sql="CREATE TABLE user ("
    ."id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,"
    ."username VARCHAR(50) NOT NULL,"
    ."password VARCHAR(50) NOT NULL);"
    ."INSERT INTO user (username, password)"
    ."VALUES"."('Smith','NKU123');";

    $result=$db->query($sql);
    if($result != true){
        die("<br>Unable to create user table<br>");
    }
    else{
        ECHO "<br>User table created<br>";                
    }

// 'People Game' TABLE
    $sql="CREATE TABLE gamePeople ("
    ."id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,"
    ."userid VARCHAR(50) NOT NULL,"
    ."username VARCHAR(50) NOT NULL,"
    ."image VARCHAR(50) NOT NULL,"
    ."score TEXT NOT NULL,"
    ."time VARCHAR(100) NOT NULL,"
    ."shoutout TEXT NOT NULL);";

    $result=$db->query($sql);
    if($result != true){
        die("<br>Unable to create gamePeople Tasks table<br>");
    }
    else{
        ECHO "<br>GamePeople table created<br>";                
    }

// 'Vintage Game' TABLE
    $sql="CREATE TABLE gameVintage ("
    ."id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,"
    ."userid VARCHAR(50) NOT NULL,"
    ."username VARCHAR(50) NOT NULL,"
    ."image VARCHAR(50) NOT NULL,"
    ."score TEXT NOT NULL,"
    ."time VARCHAR(100) NOT NULL,"
    ."shoutout TEXT NOT NULL);";

    $result=$db->query($sql);
    if($result != true){
        die("<br>Unable to create gameVintage Tasks table<br>");
    }
    else{
        ECHO "<br>GameVintage table created<br>";                
    }

// 'Cartoons Game' TABLE
    $sql="CREATE TABLE gameCartoons ("
    ."id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,"
    ."userid VARCHAR(50) NOT NULL,"
    ."username VARCHAR(50) NOT NULL,"
    ."image VARCHAR(50) NOT NULL,"
    ."score TEXT NOT NULL,"
    ."time VARCHAR(100) NOT NULL,"
    ."shoutout TEXT NOT NULL);";

    $result=$db->query($sql);
    if($result != true){
        die("<br>Unable to create gameCartoons Tasks table<br>");
    }
    else{
        ECHO "<br>GameCartoons table created<br>";                
    }

    // 'JCCO Game' TABLE
    $sql="CREATE TABLE gameJCCO ("
    ."id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,"
    ."userid VARCHAR(50) NOT NULL,"
    ."username VARCHAR(50) NOT NULL,"
    ."image VARCHAR(50) NOT NULL,"
    ."score TEXT NOT NULL,"
    ."time VARCHAR(100) NOT NULL,"
    ."shoutout TEXT NOT NULL);";

    $result=$db->query($sql);
    if($result != true){
        die("<br>Unable to create gameJCCO Tasks table<br>");
    }
    else{
        ECHO "<br>GameJCCO table created<br>";                
    }

}


?>
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

    $sql ="DROP TABLE IF EXISTS user, game";
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
    ."score TEXT NOT NULL,"
    ."time VARCHAR(100) NOT NULL,"
    ."shoutout VARCHAR(50) NOT NULL);";

    $result=$db->query($sql);
    if($result != true){
        die("<br>Unable to gamePeople Tasks table<br>");
    }
    else{
        ECHO "<br>GamePeople table created<br>";                
    }

// 'Vintage Game' TABLE
    $sql="CREATE TABLE gameVintage ("
    ."id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,"
    ."userid VARCHAR(50) NOT NULL,"
    ."username VARCHAR(50) NOT NULL,"
    ."score TEXT NOT NULL,"
    ."time VARCHAR(100) NOT NULL,"
    ."shoutout VARCHAR(50) NOT NULL);";

    $result=$db->query($sql);
    if($result != true){
        die("<br>Unable to gameVintage Tasks table<br>");
    }
    else{
        ECHO "<br>GameVintage table created<br>";                
    }

// 'Cartoons Game' TABLE
    $sql="CREATE TABLE gameCartoons ("
    ."id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,"
    ."userid VARCHAR(50) NOT NULL,"
    ."username VARCHAR(50) NOT NULL,"
    ."score TEXT NOT NULL,"
    ."time VARCHAR(100) NOT NULL,"
    ."shoutout VARCHAR(50) NOT NULL);";

    $result=$db->query($sql);
    if($result != true){
        die("<br>Unable to gameCartoons Tasks table<br>");
    }
    else{
        ECHO "<br>GameCartoons table created<br>";                
    }

}
?>
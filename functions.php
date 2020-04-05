<?php session_start();

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
/////////////// Register users and validate logon process ///////////////

function registerUser(){ 
    if(isset($_POST["registerBtn"])){
	// User clicked register button      
        if ($_POST["registerpassword"] != $_POST["confirmpassword"]){
            //echo "<script>alert('Passwords do not match');</script>";
			echo"<script>window.open('register.php','_self');</script>";
            exit();
        }else{
	        echo "<script>alert('password match');</script>";

        }
        
	// Both passwords match, see if user name already in use      
        $db = openDB();               
        $query = "SELECT password FROM user WHERE username= '".$_POST['registername']."' ;";
        $ds = $db->query($query);
        $cnt = $ds->rowCount();
        if ($cnt == 1){	            
        	echo "<script>alert('User name already registered, use different name');</script>";
			echo"<script>window.open('register.php','_self');</script>";
            exit();              
        }else{
            echo "<script>alert('Name is not there');</script>";
        }

                    
        //Add to user table   
        
		$sql ="INSERT INTO `user` (`username`, `password`)"." VALUES " 
                ."( '"
                .$_POST['registername']."','"
                .$_POST['registerpassword']."');"; 
        $result = $db->query($sql);
        if ( $result != true){
        	echo "<script>alert('Registry failed');</script>";
        }else{
			echo "<script>alert('Registry successful');</script>";
				$last_id = $db->lastInsertId();
				session_start();
				$_SESSION["granted"] = "open";
				$_SESSION["userName"] = $_POST['registername'];
				$_SESSION["userId"] = $last_id;
			echo"<script>window.open('main.php','_self');</script>"; 
            exit();
        }

    }
  } 

//////// Returning user  ///////////////////////////
if(isset($_POST["logIn"])){

    $db = openDB();               
    $query = "SELECT password, id FROM user WHERE username='".$_POST['userName']."' ;";
    $ds = $db->query($query);
    $cnt = $ds->rowCount();		
    if ($cnt == 1 ){
        
        $row = $ds->fetch(); // Get data row			
                    
        if($row["password"]==$_POST['userPassword']){
            session_start();
            $_SESSION["granted"] = "open";
            $_SESSION["userName"] = $_POST['userName'];
            $_SESSION["userId"] = $row["id"];
            echo"<script>window.open('main.php','_self');</script>"; 
            exit();
            }else{
                echo"<script>alert('User name or password is incorrect.')</script>";
                echo"<script>window.open('index.php','_self');</script>"; //index.php is correct 
                exit();
            }
        }else{
            echo"<script>alert('User name or password is incorrect.')</script>";
            echo"<script>window.open('index.php','_self');</script>"; //index.php is correct 
            exit();
        }	
}

/////////////////////////// Display Players in Messenger///////////////////////////
function displayPlayersMessenger(){
    $db = openDB();               
    $query = "SELECT id, username FROM user ORDER BY username ASC";
    $ds = $db->query($query);
    $cnt = $ds->rowCount();
    if ($cnt == 0){
        echo '';
        return; // No contacts 
    }             
    foreach ($ds as $row){
        if($row["username"]!=$_SESSION["userName"]){
        echo '<option value="'.$row["username"].'">'.$row["username"].'</option>';
        }   
    }
}
?>
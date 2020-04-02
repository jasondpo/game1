
<?php include "../functions.php";

$theFilter = $_POST['filter'];
$i=1;

$db = openDB();   

if($theFilter==null){
    $query = "SELECT id, userid, username, image, score, time, shoutout FROM gameJCCO ORDER BY score DESC";
}if($theFilter=="score"){
    $query = "SELECT id, userid, username, image, score, time, shoutout FROM gameJCCO ORDER BY ".$theFilter." DESC";
}if($theFilter=="time"){
    $query = "SELECT id, userid, username, image, score, time, shoutout FROM gameJCCO ORDER BY ".$theFilter." ASC";
}
$ds = $db->query($query);
$cnt = $ds->rowCount();
if ($cnt == 0){
    echo 'No players found.';
    return; // No contacts 
}             

foreach ($ds as $row){  
    if($theFilter=="score" || $theFilter==null){
        echo '
        <div class="playerContainer">
            <div class="playerProfile" style="background-image: url(assets/images/player/'.$row["image"].')"></div>
            <div class="playerRating">'.$i++.'</div>
            <div class="playerStatsContainer">
                <h13>'.$row["username"].'</h13>
                <h14>Score&nbsp;&nbsp;'.$row["score"].'</h14>
                <h15>Time&nbsp;&nbsp;&nbsp;'.$row["time"].'</h15>
                <h20>'.$row["shoutout"].'</h20>
            </div>
        </div>';
    }else{
        echo '
        <div class="playerContainer">
            <div class="playerProfile" style="background-image: url(assets/images/player/'.$row["image"].')"></div>
            <div class="playerRating">'.$i++.'</div>
            <div class="playerStatsContainer">
                <h13>'.$row["username"].'</h13>
                <h15>Time&nbsp;&nbsp;&nbsp;'.$row["time"].'</h15>
                <h14>Score&nbsp;&nbsp;'.$row["score"].'</h14>
                <h20>'.$row["shoutout"].'</h20>
            </div>
        </div>';
    }
}



?>

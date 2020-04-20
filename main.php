<?php include 'includes/header.php';?>
<?php 
if(isset($_POST['destroySession'])){  
    unset($_SESSION['granted']);
    echo"<script>window.open('index.php','_self');</script>";
}
if($_SESSION["granted"]=="open"){
}else{
    echo"<script>alert('You must sign in first');</script>";
    echo"<script>window.open('index.php','_self');</script>";
exit(); 
}
?>

<body>

    <header>
        <div class="colorRibbon"></div>
        <div class="userProfilePic"><?php $firstLetter = $_SESSION["userName"][0]; echo $firstLetter; ?></div>
        <div class="logo"></div>
        <div class="glasses"></div>
        <div class='eyes-container'>
            <div class='eye'></div>
            <div class='eye'></div>
        </div>
    </header>

    <div class="logoutMessageBox">
        <div class="userMessageBoxArrowUp"></div>
        <h30><span>Message</span> <i class="downArrow"></i></h30>
        <div class="toggleReceiveMessage">
            <?php displayPlayerMail(); ?>
        </div>
        <div class="toggleSendMessage">

            <form id="sendMessageForm" method="POST">
                <select name="selectPlayer">
                    <option value="">Select Player</option>
                    <?php displayPlayersMessenger(); ?>
                </select>
                <textarea name="userMessageBox" id="userMessageBox" cols="30" rows="10" placeholder="What's on your mind, <?php echo $_SESSION["userName"]; ?>?"></textarea>
                <input type="submit" class="sendMessageBtn btnStyle" name="sendMessageBtn" value="Send">
            </form>   

        </div>    
        <hr style="background-color: #DDD; height: 1px; border: 0;margin:18px 0px 12px 0px">
        <form action="main.php" method="POST">
            <input type="submit"  class="destroySession btnStyle"  name="destroySession" id="LogoutBtn" value="Logout">
        </form>
    </div>

    <div class="messageBubbleContainer">
        <div class="messageBubble">
            <h22></h22>
        </div>
        <div class="messageBubble-ArrowdDown"></div>
    </div>

    <div class="card-floating-socialIcons">
        <div class="card-floating-socialIcons-arrowLeft-top"></div>
        <div class="card-floating-socialIcons-arrowLeft-bottom"></div>
        <div class="playerPic-card-floating"></div>
        <h18></h18>
        <i class="fas fa-bullhorn"></i>
        <h19></h19>
    </div>
    <div class="cursor"></div>
    <div class="voice"></div>
    <div class="overlayCurtain"></div>
    <div class="messageContainer"></div>
    <div class="hintBox"></div>
    <div class="quitBox">
        <h35><span>Quit?</span></h35>
        <h35 id="yesBtn">YES</h35>
        <h35 id="noBtn">NO</h35>
    </div>
    <div class="solveBox">
        <form action="index.php">
            <input type="text" id="solveField" placeholder="Enter your best guess">
            <input type="submit" id="solveBtn">
        </form>
    </div>
    <div class="darkScreen"></div>
    <div class="overlay"></div>

    <div class="statsColumn">
        <div class="scoreContainer">
            Score<br>
            <input type="text" name="score" id="score" value="100" disabled>
        </div>
        <div class="stopWatch grow">
            <div></div>Time
        </div>
        <h28>Game<br><span>1/4</span></h28>
        <h29>W - L<br><span>2-2</span></h29>
    </div>

    <section class="move-area"></section>

    <div class="leaderboard">

        <div class="topPlayersSpacer" onclick="selectFilter()">
            <h17>
                <h23></h23> <h25>Best Scores</h25>&nbsp;&nbsp;<i class="downArrow"></i>
            </h17>
            <div class="categoryFadeBox"></div>
            <h16>TOP PLAYERS</h16>
        </div>

        <div class="playerList"></div>

    </div>

    <div class="puzzleLayerContainer"></div>
    <div class="imageContainer"></div>
    <div class="woodenBoard"></div>

    <div class="smartGaugeColumn">
        <div class="rightTopFace"></div>
        <div class="dot1 dotStyle" onmouseover="message('dot1')"></div>
        <div class="dot2 dotStyle" onmouseover="message('dot2')"></div>
        <div class="dot3 dotStyle" onmouseover="message('dot3')"></div>
        <div class="dot4 dotStyle" onmouseover="message('dot4')"></div>
        <div class="dot5 dotStyle" onmouseover="message('dot5')"></div>
        <div class="rightBottomFace"></div>
    </div>


<div class="controlBtnContainer">

    <h24></h24>
    <div class="pieceBtn btnClass remove"></div>
    <div class="hintBtn btnClass hint"></div>
    <div class="goBtn btnClass go"></div>
    <div class="solveBtn btnClass solve"></div>
    <div class="quitBtn quit"></div>

    <div class="navBtn grow quit">
        <h11>Quit (press Q)</h11>
    </div>
    <div class="navBtn grow go">
        <h11>Play (hold G)</h11>
    </div>
    <div class="navBtn grow hint">
        <h11>Clue (hold C)</h11>
    </div>
    <div class="navBtn grow solve">
        <h11>Solve (press S)</h11>
    </div>
</div>

<div class="pinkArrowDown pinkArrowDownActive"></div>
<h27><?php echo $_SESSION["userName"]; ?>, select a category.</h27>
<h26>Includes:<span></span></h26>
<div class="categoriesContainer">
    <ul id="btmNav">
        <li>
            <i class="leftArrow"></i>
        </li>
        <li class="navBtnGroup" onmouseover="showDesc('people')" onclick="selectTopic('people')">
            <div class="arrow-down"></div>
            <h21 class="btnCategory">People</h21>
        </li>
        <li class="navBtnGroup vintage" onmouseover="showDesc('vintage')"  onclick="selectTopic('vintage')">
            <div class="arrow-down"></div>
            <h21 class="btnCategory">Vintage</h21>
        </li>
        <li class="navBtnGroup cartoons" onmouseover="showDesc('cartoons')" onclick="selectTopic('cartoons')">
            <div class="arrow-down"></div>
            <h21 class="btnCategory">Cartoons</h21>
        </li>
        <li class="navBtnGroup jcco" onmouseover="showDesc('jcco')" onclick="selectTopic('jcco')">
            <div class="arrow-down"></div>
            <h21 class="btnCategory">JCCO</h21>
        </li>
        <li>
            <i class="rightArrow"></i>
        </li>
    </ul>
</div>

</body>
 
<?php include 'includes/footer.php';?>
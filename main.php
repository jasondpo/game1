<?php include 'includes/header.php';?>
<?php 
if(isset($_POST['destroySession'])){  /// Place destroy session inside header.php. If that doesn't work, place on top of php code like this example.  
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
        <div class="toggleReceiveMessage"></div>
        <div class="toggleSendMessage">
            <select id="cars">
                <option value="">Select Player</option>
                <?php displayPlayersMessenger(); ?>
            </select>
            <textarea name="" id="userMessageBox" cols="30" rows="10" placeholder="Type a message."></textarea>
            <input type="post" value="Send">
        </div>    
        <hr style="background-color: #DDD; height: 1px; border: 0;">
        <h30 class="logout">Logout</h30>
    </div>

    <div class="messageBubbleContainer">
        <div class="messageBubble">
            <h22>The most well known cartoon character in the world</h22>
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

    <div class="overlayCurtain"></div>
    <div class="messageContainer"></div>
    <div class="hintBox"></div>
    <div class="solveBox">
        <form action="index.php">
            <input type="text" id="solveField" placeholder="Enter your best guess">
            <input type="submit" id="solveBtn">
        </form>
    </div>
    <div class="darkScreen"></div>
    <div class="overlay"></div>
    <div class="scoreContainer">
        Score<br>
        <input type="text" name="score" id="score" value="100">
    </div>
    <div class="stopWatch grow">
        <div></div>Time
    </div>
    <div class="cursor"></div>
    <div class="voice"></div>

    <h28>Game<br><span>1|5</span></h28>
    <h29>W - L<br><span>2-2</span></h29>

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
    <div class="rightTopFace"></div>
    <div class="rightBottomFace"></div>

    <div class="dot1 dotStyle" onmouseover="message('dot1')"></div>
    <div class="dot2 dotStyle" onmouseover="message('dot2')"></div>
    <div class="dot3 dotStyle" onmouseover="message('dot3')"></div>
    <div class="dot4 dotStyle" onmouseover="message('dot4')"></div>
    <div class="dot5 dotStyle" onmouseover="message('dot5')"></div>


    <sidebar>
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
    <!-- <div class="navBtn grow remove">
        <h11>Piece (press P)</h11>
    </div> -->
</sidebar>

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
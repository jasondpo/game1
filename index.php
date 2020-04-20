<?php include "includes/header.php";?>

<body>
<style>
body, html{
    background-image: url(assets/images/bkg/puzzleMan.png);
	background-position: center 76px;
	/* background-size:20%; */
	background-repeat: no-repeat;
	height: 100%;
	cursor:auto !important;
}
</style>
		
	<header>
        <div class="colorRibbon"></div>
        <div class="logo"></div>
	</header>

	<div id="bird1"></div>
	<div id="bird2"></div>
	
	<div class="loginContainer">

		<div class="">
			<div>
				<form method="post" autocomplete='off' action="index.php">
												
					<input type="text" id="userName" class="inputStyle"name="userName" value="Username" onblur="if(this.value==''){ this.value='Username';}" onfocus="if(this.value=='Username'){this.value=''}"/>
					<br>
					<br>
					<input type="text" id="password" class="inputStyle" name="userPassword" value="Password" onblur="if(this.value==''){ this.value='Password'; this.type='text'}" onfocus="if(this.value=='Password'){ this.value=''; this.type='password';}"/>
					<br>
					<br>
					<input type="submit" class="loginBtn btnStyle" name="logIn" value="Log in"> &nbsp;&nbsp; <button type="button" class="signupBtn btnStyle"><a href="register.php">Sign up</a></button> 
								
				</form> 
			</div> 	
		</div>

	</div>

<h34>&copy; 2004-<?php echo date('Y');?> JasonD Portfolio </h34>


</body>		

<?php include "includes/footer.php";?>	
	

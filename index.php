<?php include "includes/header.php";?>

<body>
<style>
body, html{
	background-position: center 40px;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
	cursor:auto !important;
}
</style>
		
	<header>
        <div class="colorRibbon"></div>
        <div class="logo"></div>
	</header>
	
	<div class="loginContainer">

		<div class="">
			<div>
				<form method="post" autocomplete='off' action="index.php">
												
					<input type="text" id="userName" name="userName" value="Username" onblur="if(this.value==''){ this.value='Username';}" onfocus="if(this.value=='Username'){this.value=''}"/>
					<br>
					<br>
					<input type="text" id="password" name="userPassword" value="Password" onblur="if(this.value==''){ this.value='Password'; this.type='text'}" onfocus="if(this.value=='Password'){ this.value=''; this.type='password';}"/>
					<br>
					<br>
					<input type="submit" class="loginBtn" name="logIn" value="Log in"> &nbsp;&nbsp; <button type="button" class="signupBtn"><a href="register.php">Sign up</a></button> 
								
				</form> 
			</div> 	
		</div>

	</div>




</body>		

<?php include "includes/footer.php";?>	
	

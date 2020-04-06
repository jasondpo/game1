<?php include "includes/header.php";?>

<body>
<style>
body, html{
	background-image:url("assets/images/bkg/waterfront3.jpg") !important;
	background-position: center 40px;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
}
.loginContainer{
	position:absolute;
	Top:300px;
	left:50%;
	margin-left:-150px;
	width:300px;
	height:160px;
	background-color:white;
	border-radius:6px;
	box-shadow:
    0 0.4px 0.8px rgba(0, 0, 0, 0.02),
    0 1.1px 1.9px rgba(0, 0, 0, 0.028),
    0 2px 3.5px rgba(0, 0, 0, 0.035),
    0 3.6px 6.3px rgba(0, 0, 0, 0.042),
    0 6.7px 11.7px rgba(0, 0, 0, 0.05),
    0 16px 28px rgba(0, 0, 0, 0.07);
	z-index:2;
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
					<input type="submit" class="button" name="logIn" value="Log in"> &nbsp;&nbsp; <button type="button" class="signupBtn"><a href="register.php">Sign up</a></button> 
								
				</form> 
			</div> 	
		</div>

	</div>

	<div class="categoriesContainer"></div>


</body>		

<?php include "includes/footer.php";?>	
	

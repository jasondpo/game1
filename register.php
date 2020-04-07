<?php include 'includes/header.php'; ?>

	<?php
		if($_SERVER['REQUEST_METHOD'] == 'POST'){
            registerUser();
        }
    ?>
	<style>
	body, html{
		background-image: url(assets/images/bkg/puzzle-man2.png);
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
	
	<div class="loginContainer">

			<div>
				<form method="post" autocomplete='off' action="register.php">
												
					<input type="text" id="registername" class="inputStyle" name="registername" value="Username" onblur="if(this.value==''){ this.value='Username';}" onfocus="if(this.value=='Username'){this.value=''}"/>
					<br>
					<br>
					<input type="text" id="registerpassword" class="inputStyle" name="registerpassword" value="Password" onblur="if(this.value==''){ this.value='Password'; this.type='text'}" onfocus="if(this.value=='Password'){ this.value=''; this.type='password';}"/>
					<br>
					<br>
					<input type="text" id="confirmpassword" class="inputStyle" name="confirmpassword" value="Confirm Password" onblur="if(this.value==''){ this.value='Confirm Password'; this.type='text'}" onfocus="if(this.value=='Confirm Password'){ this.value=''; this.type='password';}"/>
					<br>
					<br>
					<button type="button" class="backBtn btnStyle"><a href="index.php">Back</a></button>&nbsp;&nbsp; <input type="submit" class="registerBtn btnStyle" name="registerBtn" value="Register"> 	
								
				</form> 
			</div>	
	</div>		

	<h34>&copy; 2004-<?php echo date('Y');?> JasonD Portfolio </h34>

	<?php include "includes/footer.php";?>	
	
</html>
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
	
	<div id="loginApp" class="loginContainer">

	    <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
            <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>

		<div>
			<form method="post" autocomplete='off' action="register.php" @submit="checkForm" >
											
				<input type="text" id="registername" class="inputStyle" name="registername" placeholder="Username" onblur="if(this.placeholder==''){ this.placeholder='Username';}" onfocus="if(this.placeholder=='Username'){this.placeholder=''}" autocomplete="new-password"  v-model="username"/>
				<br>
				<br>
				<input type="text" id="registerpassword" class="inputStyle" name="registerpassword" placeholder="Password" onblur="if(this.value==''){ this.placeholder='Password'; this.type='text'}" onfocus="if(this.placeholder=='Password'){ this.placeholder=''; this.type='password';}" v-model="password"/>
				<br>
				<br>
				<input type="text" id="confirmpassword" class="inputStyle" name="confirmpassword" value="Confirm Password" onblur="if(this.value==''){ this.value='Confirm Password'; this.type='text'}" onfocus="if(this.value=='Confirm Password'){ this.value=''; this.type='password';}"/>
				<br>
				<br>
				<button type="button" class="backBtn btnStyle"><a href="index.php">Back</a></button>&nbsp;&nbsp; <input type="submit" class="registerBtn btnStyle" name="registerBtn" value="Register"> 	
							
			</form> 
		</div>	
	</div>	
	
	<script>

    const app = new Vue({
        el: '#loginApp',
        data: {
            errors: [],
            username: null,
            password: null,
        },
        methods:{
            checkForm: function (e) {
            if (this.username.length>2 && this.password.length>2) {
                return true;
            }

			this.errors = [];
			
			if (this.username.length<2) {
                this.errors.push('Username is too short');
			}
			if (this.password.length<2) {
                this.errors.push('Password is too short');
            }

            if (!this.username) {
                this.errors.push('Name required.');
            }
            if (!this.password) {
                this.errors.push('password required.');
            }

            // e.preventDefault();
            }
        }
    })

	</script>

	<h34>&copy; 2004-<?php echo date('Y');?> JasonD Portfolio </h34>

	<?php include "includes/footer.php";?>	
	
</html>
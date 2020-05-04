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
	
	<div id="registerApp" class="loginContainer">

	    <div id="inputCorrectionMessage" v-if="errors.length">
            <b>Please make the following adjustment(s):</b>
			<ul>
				<li v-for="error in errors">{{ error }}</li>
			</ul>
        </div>

		<div>
			<form method="post" autocomplete='off' action="register.php" @submit="checkForm">

				<input type="search" id="registername" class="inputStyle" name="registername" placeholder="Create username" onblur="if(this.placeholder==''){ this.placeholder='Create username';}" onfocus="if(this.placeholder=='Create username'){this.placeholder=''}" autocomplete="off" v-model="username"/>
				<br>
				<br>
				<input type="text" id="registerpassword" class="inputStyle" name="registerpassword" placeholder="Create password" onblur="if(this.value==''){ this.placeholder='Create password'; this.type='text'}" onfocus="if(this.placeholder=='Create password'){ this.placeholder=''; this.type='password';}" v-model="password"/>
				<br>
				<br>
				<input type="text" id="confirmpassword" class="inputStyle" name="confirmpassword" placeholder="Reenter password" onblur="if(this.value==''){ this.placeholder='Reenter password'; this.type='text'}" onfocus="if(this.placeholder=='Reenter password'){ this.placeholder=''; this.type='password';}" v-model="confirmpassword"/>
				<br>
				<br>
				<button type="button" class="backBtn btnStyle"><a href="index.php">Back</a></button>&nbsp;&nbsp; <input type="submit" class="registerBtn btnStyle" name="registerBtn" value="Confirm"> 	
							
			</form> 
		</div>	
	</div>	
	
	<script>
	
    const app = new Vue({
        el: '#registerApp',
        data: {
            errors: [],
            username: null,
			password: null,
			confirmpassword: null,
        },
        methods:{
			checkForm: function (e) {
				if (!this.username || !this.password || !this.confirmpassword) {
					this.errors = [];
					this.errors.push('Username and/or password required.');
					e.preventDefault();
				} 
				if (this.validInput(this.username) || this.validInput(this.password) ){
					this.errors.push('Remove special characters (e.g.: #-_@)');
					e.preventDefault();
				}
				this.comparePasswords();
				e.preventDefault();
			},
			validInput: function (username, password) {
				var re = /[a-zA-Z]+[(@!#\$%\^\&*\)\(+=._-]{1,}/;
				return re.test(username, password);
			},
			comparePasswords: function (password, confirmpassword){
				if(this.password!==this.confirmpassword){
					this.errors.push('Passwords do not match.');
				}
			}
      
        }
    })

	</script>

	<h34>&copy; 2004-<?php echo date('Y');?> JasonD Portfolio </h34>

	<?php include "includes/footer.php";?>	
	
</html>
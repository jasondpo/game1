<?php include "includes/header.php";?>

<body>
<style>
body, html{
    background-image: url(assets/images/bkg/puzzleMan.png);
	background-position: center 76px;
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

		<div id="loginApp">
			<div id="inputCorrectionMessage" v-if="errors.length">
				<b>Please make the following adjustment(s):</b>
				<ul>
					<li v-for="error in errors">{{ error }}</li>
				</ul>
			</div>
			<div>
				<form method="post" autocomplete='off' action="index.php" @submit="checkForm">
												
					<input type="text" id="userName" class="inputStyle"name="userName" placeholder="Username" onblur="if(this.placeholder==''){ this.placeholder='Username';}" onfocus="if(this.placeholder=='Username'){this.placeholder=''}" v-model="username"/>
					<br>
					<br>
					<input type="text" id="password" class="inputStyle" name="userPassword" placeholder="Password" onblur="if(this.value==''){ this.placeholder='Password'; this.type='text'}" onfocus="if(this.placeholder=='Password'){ this.placeholder=''; this.type='password';}" v-model="password"/>
					<br>
					<br>
					<input type="submit" class="loginBtn btnStyle" name="logIn" value="Log in"> &nbsp;&nbsp; <button type="button" class="signupBtn btnStyle"><a href="register.php">Create account</a></button> 
								
				</form> 
			</div> 	
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
				if (!this.username || !this.password) {
					this.errors = [];
					this.errors.push('Username and/or password required.');
					e.preventDefault();
				} 
				if (this.validInput(this.username) || this.validInput(this.password) ){
					this.errors.push('Remove special characters (e.g.: #-_@)');
					e.preventDefault();
				}
			},
			validInput: function (username, password) {
				var re = /[a-zA-Z]+[(@!#\$%\^\&*\)\(+=._-]{1,}/;
				return re.test(username, password);
			}
        }
    })

	</script>

<h34>&copy; 2004-<?php echo date('Y');?> JasonD Portfolio </h34>


</body>		

<?php include "includes/footer.php";?>	
	

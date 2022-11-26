function logInfo(){
	var email = document.getElementById('email').value;
	var realName = document.getElementById('realname').value;
	var userName = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	var newUser = {
	email: email,
	name: realName,
	userName: userName,
	password: password
}

var serialNewUser = JSON.stringify(newUser);

localStorage.setItem(email.toString(), serialNewUser);
}
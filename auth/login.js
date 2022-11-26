function logIn(){
	var emailFromLoginForm = document.getElementById('email').value;
	var passwordFromLoginForm = document.getElementById('password').value;

	var registeredUser = localStorage.getItem(emailFromLoginForm.toString());

	if (!registeredUser){
		alert('No such user registered');
	} else if (passwordFromLoginForm.toString() !== JSON.parse(registeredUser).password) {
		alert("Invalid password");
	} else {
		window.location.replace('../index.html');
	}
}
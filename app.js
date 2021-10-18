const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs();  
  });

  function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
  
    if (usernameValue === "") {
      setErrorFor(username, "USERNAME cannot be blank");
    } else {
      setSuccessFor(username);
    }
  
    if (emailValue === "") {
      setErrorFor(email, "EMAIL cannot be blank");
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, "EMAIL is not valid");
    } else {
      setSuccessFor(email);
    }


    }
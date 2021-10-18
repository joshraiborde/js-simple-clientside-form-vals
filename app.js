const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
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

  if (passwordValue === "") {
    setErrorFor(password, "PASSWORD cannot be blank");
  } else if (passwordValue !== confirmPasswordValue) {
    setErrorFor(password, "PASSWORDS do not match");
  } else {
    setSuccessFor(password);
  }

  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "CONFIRM PASSWORD cannot be blank");
  } else if (passwordValue !== confirmPasswordValue) {
    setErrorFor(confirmPassword, "PASSWORDS do not match");
  } else {
    setSuccessFor(confirmPassword);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
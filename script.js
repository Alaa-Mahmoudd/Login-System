var userName = document.querySelector(".name");
var userEmail = document.querySelector(".email");
var userPassword = document.querySelector(".password");
var para = document.querySelector(".erorr");
var para1 = document.querySelector(".sucess");

function handleSignup(event) {
  event.preventDefault();

  if (
    userName.value.trim() === "" ||
    userEmail.value.trim() === "" ||
    userPassword.value.trim() === ""
  ) {
    para.innerHTML = "All Inputs Required";
    return false;
  } else {
    localStorage.setItem("username", userName.value);
    localStorage.setItem("useremail", userEmail.value);
    localStorage.setItem("userpassword", userPassword.value);
    para1.innerHTML = "Registration successful!";
    return true;
  }
}
function handleLogin(event) {
  event.preventDefault();
  var storedEmail = localStorage.getItem("useremail");
  var storedPassword = localStorage.getItem("userpassword");
  if (userEmail.value.trim() === "" || userPassword.value.trim() === "") {
    para.innerHTML = "All Inputs Required";
    return false;
  } else if (
    userEmail.value == storedEmail &&
    userPassword.value == storedPassword
  ) {
    para1.innerHTML = "Login successful!";
    window.location.href = "home.html";

    return true;
  } else {
    para.innerHTML = "Invalid Information";
    return false;
  }
}

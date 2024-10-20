function welcome() {
  var storedName = localStorage.getItem("username");
  var h2 = document.querySelector(".Heading");
  if (storedName) {
    h2.innerHTML = `Welcome ${storedName}`;
  }
}
welcome();
var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  localStorage.removeItem("username");
  localStorage.removeItem("useremail");
  localStorage.removeItem("userpassword");
  window.location.href = "index.html";
});

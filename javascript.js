// ================================= HEADER =================================
const head = `
    <div class="logo">
        <p>MY<b>SITE</b></p>
    </div>
    <div class="nav">
        <ul>
            <li><a href="index.html"><i class="fas fa-home mr-3"></i><p class="hover">Home</p></a></li>
            <li><a href="login.html"><i class="fa fa-user-circle"></i><p class="hover">Log in</p></a></li>
            <li><i class="fa fa-search"></i><p class="active">
                <input type="text" name="search" id="search" placeholder=" Search...">
            </p></li>
        </ul>
    </div>
`;
window.addEventListener('DOMContentLoaded', () => {
  let headerbar = document.querySelector('div[role="headerbar"]');
  headerbar.innerHTML = head;
});





// ================================= FOOTER =================================
const footer = `
  <p class="quote">"The funny thing about shopping online is that it does <br>give you a sense of fulfillment when your order arrives"</p>
  <div>
    <ul>
      <li><h3>SHOP</h3></li>
      <li><a href="men.html">For Men</a></li>
      <li><a href="">For Women</a></li>
      <li><a href="">For Kids</a></li>
    </ul>
    <ul>
      <li><h3>COMPANY</h3></li>
      <li><a href="login.html">Login</a></li>
      <li><a href="signup.html">Register</a></li>
      <li><a href="help.html">Help</a></li>
    </ul>
    <ul>
      <li><h3>ADDRESS</h3></li>
      <li>Ferizaj, Kosovo</li>
      <li>044 123 123</li>
      <li>mail@gmail.com</li>
    </ul>
  </div>
  <br>
  <p class="copy"><b>MYSITE</b> &copy; 2021</p>
`;
window.addEventListener('DOMContentLoaded', () => {
  let footerf = document.querySelector('div[role="footer"]');
  footerf.innerHTML = footer;
});



// ================================= HEADER STICKY =================================
var header = document.getElementById("header");
var sticky = header.offsetTop;

function nonScrollHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function() {
    nonScrollHeader();
}


//=================================SIGN UP VALIDATION===============================
var registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener("click", function(event){
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

// var button = document.getElementById("button");
var nameMsg = document.getElementById("nameMsg")
var surnameMsg = document.getElementById("surnameMsg")
var usernameMsg = document.getElementById("usernameMsg")
var emailMsg = document.getElementById("emailMsg")
var passwordMsg = document.getElementById("passwordMsg")


var nameRegex = /^[A-Z][a-z]{2,11}/;
var nameRegex = /^[A-Z][a-z]{2,11}/;
var usernameRegex = /^[a-z]+\d?/;
var emailRegex = /^[A-Za-z]+\d+[._-]?\w+@[A-Za-z]+[-]?[A-Za-z]+\.[A-Za-z]{2,3}/;
var passwordRegex = /^[A-Za-z]+\d{8}/;


  if (name== "") {
    nameMsg.innerText="*Fill the name field!";
    event.preventDefault();
  }
  else{
    if(nameRegex.test(name)){
    }
    else {
      nameMsg.innerText = "First letter uppercase and 2-11 characters!";
      event.preventDefault();
    }
  }
  if (surname== "") {
    surnameMsg.innerText="*Fill the surname field!";
    event.preventDefault();
  }
  else{
    if(surnameRegex.test(surname)){
    }
    else {
      surnameMsg.innerText = "First letter uppercase and 2-11 characters!";
      event.preventDefault();
    }
  }
  if (username== "") {
    usernameMsg.innerText="*Fill the username field!";
    event.preventDefault();
  }
  else{
    if(usernameRegex.test(username)){
    }
    else {
      usernameMsg.innerText = "You should use lowercase letter!";
      event.preventDefault();
    }
  }
  if (email== "") {
    emailMsg.innerText="*Fill the email field!";
    event.preventDefault();
  }
  else{
    if(emailRegex.test(email)){
    }
    else {
      emailMsg.innerText = "First letter uppercase and 2-11 characters!";
      event.preventDefault();
    }
  }
  if (password== "") {
    passwordMsg.innerText="*Fill the password field!";
    event.preventDefault();
  }
  else{
    if(passwordRegex.test(password)){
    }
    else {
      passwordMsg.innerText = "*Password must contain 8 characters!";
      event.preventDefault();
    }
  }
});
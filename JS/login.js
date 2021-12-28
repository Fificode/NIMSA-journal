//BACKEND
//LOGIN
const logInForm = document.getElementById("login-form");
const emailInput = document.getElementById("email-login");
const passwordInput = document.getElementById("password-login");

var submitLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:8001/login", { 
   method: "POST",
    headers: {
   Accept: "application/json, text/plain, /",
    "Content-Type": "application/json", 
   },
    body: JSON.stringify({
    Email: emailInput.value,
    password: passwordInput.value, 
   })})
   .then((response) => {
       let data = response.data;
   localStorage.setItem("userdata",JSON.stringify(data));
    if (data.usertype=='student') {
  Window.location.href = "user-account.html"
  } else {
   Window.location.href = "publishpaper.html"
 }
    })
   .catch(
   (err) =>
    { console.log(err); }
   );
    }

 logInForm.addEventListener('submit', submitLogIn);

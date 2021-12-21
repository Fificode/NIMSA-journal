//BACKEND
//SIGN UP AS A PARTNER

const registerPartnerForm = document.getElementById("register-partner-form");
const nameInputPartner = document.getElementById("name-partner");
const emailInputPartner = document.getElementById("email-partner");
const passwordInputPartner = document.getElementById("password-partner");


const submitRegistrationPartner = async(e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:8001/editorreg", {
        method: 'POST',
      headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: nameInputPartner.value,
            email: emailInputPartner.value,
            password: passwordInputPartner.value,
    })
});

response = await response.json();
console.log(response);

}
registerPartnerForm.addEventListener('submit', submitRegistrationPartner);
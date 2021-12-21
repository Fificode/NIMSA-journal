//BACKEND
//SIGNUP AS A NIMSAITE
const registerNimsaiteForm = document.getElementById("register-nimsaite-form");
const nameInput = document.getElementById("name-nim");
const emailInput = document.getElementById("email-nim");
const matricNumberInput = document.getElementById("matric-number-nim");
const collegeInput = document.getElementById("college-nim");
const passwordInput = document.getElementById("password-nim");


 
const submitRegistration = async(e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:8001/register", {
        method: 'POST',
      headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: nameInput.value,
            email: emailInput.value,
            matric: matricNumberInput.value,
            medicalcollege: collegeInput.value,
            password: passwordInput.value,
        })
        
    });
  
    response = await response.json();
    console.log(response);
    if(response.success){
console.log("Successful");
    }
    else if(response.error){
        console.log(error);
    }
    
 
}
  registerNimsaiteForm.addEventListener( 'submit' , submitRegistration);
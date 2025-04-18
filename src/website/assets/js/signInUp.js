const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
let nameUpInput = document.getElementById("name-up-input");
let emailUpInput = document.getElementById("email-up-input");
let passwordUpInput = document.getElementById("password-up-input");

let emailInInput = document.getElementById("email-in-input");
let passwordInInput = document.getElementById("password-in-input");

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


var login = document.getElementById("login-direct").addEventListener("click" , ()=> {
    if(emailInInput.value == "" || passwordInInput.value == ""){
        alert("Please fill all the fields");
    }else{
        console.log("Login Successfully");
    }
})

var register = document.getElementById("register-direct").addEventListener("click" , ()=> {
    if(nameUpInput.value == "" || emailUpInput.value == "" || passwordUpInput.value == ""){
        alert("Please fill all the fields");
    }else{
        console.log("Register Successfully");
    }
})
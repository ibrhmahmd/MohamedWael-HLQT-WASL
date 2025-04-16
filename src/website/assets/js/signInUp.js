const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


var login = document.getElementById("login-direct").addEventListener("click" , ()=> {
    location.replace("././web/home.html");
})

var register = document.getElementById("register-direct").addEventListener("click" , ()=> {
    location.replace("././web/home.html")
})
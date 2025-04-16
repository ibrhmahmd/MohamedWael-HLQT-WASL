let sendBtn = document.getElementById('send-btn');
let messageDiv = document.querySelector('.message-prompt');
let messageContent = document.querySelector(".error")
let usernameInput = document.querySelector("#username-input")
let emailInput = document.querySelector("#email-input")
let passwordInput = document.querySelector("#phone-number-input")
let messageInput = document.getElementById("message-input")



function contactUsCheck() {
    sendBtn.addEventListener("click" , ()=> {
        if(usernameInput.value == ""){
            messageDiv.style.display = 'flex';
            messageContent.innerHTML = "<b> ❌ User Name is missing </b>"
        }
        if(emailInput.value == ""){
            messageDiv.style.display = 'flex';
            messageContent.innerHTML = "<b> ❌ Email is missing </b>"
        }
        if(passwordInput.value == ""){
            messageDiv.style.display = 'flex';
            messageContent.innerHTML = "<b> ❌ Password is missing </b>"
        }
        if(messageInput.value == ""){
            messageDiv.style.display = 'flex';
            messageContent.innerHTML = "<b> ❌ Where is your Message?? </b>"
        }
        else{
            window.alert(" ✅ The message is succesfully sent  ")  
        }
    })
}

contactUsCheck()

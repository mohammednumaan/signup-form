let password = document.querySelector('#password')
let confirm_password = document.querySelector('#confirm_password')
let submitButton = document.querySelector('sign-up-button')
let error_message = document.querySelector('.error-message')

function validatePassword() {
    if (password.value != confirm_password.value){
        confirm_password.setCustomValidity("Passwords Don't Match!")
        error_message.classList.add('active')
        password.classList.add('active')
        confirm_password.classList.add('active')

    }
    else{
        confirm_password.setCustomValidity("")
        error_message.classList.remove('active')
        password.classList.remove('active')
        confirm_password.classList.remove('active')
    }   
}


confirm_password.onchange = validatePassword


var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

 function hideError(errormsg){
    setTimeout(function(){
    errormsg.style.display = 'none';
},3000);
}

function validateName(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML  = "Name is required";
        hideError(nameError);
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML  = "Write Full Name";
        hideError(nameError);
        return false;
    }
    nameError.innerHTML = '<i >valid</i>';;
    return true;

}
function validatePhone() {
    var phone= document.getElementById('contact-phone').value;
    //console.log(phone);

    if(/[^0-9]/.test(phone)){
        phoneError.innerHTML = "only digit please ";
        hideError(phoneError);
        return false;
    }
    
    if(phone.length !== 10){
        phoneError.innerHTML = "phone number should be 10 digits";
        hideError(phoneError);
        return false;
    }
    
    
    phoneError.innerHTML = '<i >valid</i>';
    return true;
    
}
function validateEmail(params) {
    var email= document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        hideError(emailError);
        return false;
    }
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if(!email.match(emailPattern)){
        emailError.innerHTML = "Email invalid";
        hideError(emailError);
        return false;
    }
    
    emailError.innerHTML = '<i >valid</i>';
    return true;
    
}
function validatemessage(){
    var message= document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left >0) {
        messageError.innerHTML  = left + 'more character required';
        hideError(messageError);
        return false;
    }
    messageError.innerHTML = '<i >valid</i>';
    return true;
}

function validateForm() {
    if(!validateName() || !validateEmail() || !validatePhone() || !validatemessage()){
        submitError.innerHTML = "please fix error to submit";
        setTimeout(function(){
            submitError.style.display = 'none';
        },4000);
        return false;
    }
}
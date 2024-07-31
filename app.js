
var nameErorr = document.getElementById('name-error');
var phoneErorr = document.getElementById('phone-error');
var emailErorr = document.getElementById('email-error');
var messageErorr = document.getElementById('message-error');
var submitErorr = document.getElementById('submit-error');


function validateName(){
    var name = document.getElementById('contact-name').value;
    console.log(name);
    if(name.length == 0){
        nameErorr.innerHTML = "Name is required...";
        return false;
    } 
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameErorr.innerHTML = "Write Full Name...";
        return false;
    }
    nameErorr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    }

    function validatePhone(){
        var phone = document.getElementById('contact-phone').value;
        if(phone.length == 0){
            phoneErorr.innerHTML = "Phone number is required";
            return false;
        }
        if(phone.length !== 10){
            phoneErorr.innerHTML = "Phone no should be 10 digits";
            return false;
        }
        if(!phone.match(/^[0-9]{10}$/)){
            phoneErorr.innerHTML = "only digits please";
            return false;
        }
        phoneErorr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

    function validateEmail(){
        var email = document.getElementById('contact-email').value;
        if(email.length == 0){
            emailErorr.innerHTML = "email is required";
            return false;
        }
        if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailErorr.innerHTML = 'email is invalid';
            return false;
        }
        emailErorr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

    function validateMessage(){
        var message = document.getElementById('contact-message').value;
        var required = 30;
        var left = required - message.length;

        if(left > 0){
            messageErorr.innerHTML = left + 'more character is required';
            return false;
        }
        messageErorr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

    function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
    submitErorr.style.display = 'block';
    submitErorr.innerHTML = 'please fix error to submit';
    setTimeout(function(){ submitErorr.style.display = 'none';},3000);
    return false;
    }
    }
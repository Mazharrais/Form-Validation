
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
    nameErorr.innerHTML = "valid";
    return true;



    }
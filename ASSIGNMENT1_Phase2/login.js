function validate()
{var email=document.getElementById("email");
var pwd=document.getElementById("pwd");
var error1=document.getElementById("error1");
var error2=document.getElementById("error2");
if(email_validation(email,error1))
{
    if (pwd_validation(pwd,error2))
    {
        return true;
    }
}
return false;
}
function email_validation(email,error1)
{   
   
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat))
    { 
    error1.innerHTML="";
    return true;
    }
    else
    {  
    error1.innerHTML="Invalid Email ID";
    error1.style.color="red";
    email.focus();
    return false;
    }
}
function pwd_validation(pwd,error2)
{  
    var error2 = document.getElementById('error2');
    if(pwd.value==0){error2.innerHTML="";}
        var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{8,}).*", "g");
        var pwd = document.getElementById("pwd");
        if (false == enoughRegex.test(pwd.value)) {
            error2.innerHTML = 'Password too short';
            error2.style.color="red";
            return false;
        } else if (strongRegex.test(pwd.value)) {
            error2.innerHTML = 'Strong';
            error2.style.color="green" ;
            return true;
        } else if (mediumRegex.test(pwd.value)) {
            error2.innerHTML = 'Medium';
            error2.style.color="orange";
            return true;
        } else {
            error2.innerHTML = "Weak";
            error2.style.color="red";
            return false;
        }
        
    }
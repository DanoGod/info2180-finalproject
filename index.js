function valid()
{
    
    var pass = document.getElementById("passwrd").value;
    var email = document.getElementById("email").value;
    if(validatePassword(pass) && validateEmail(email))
    {
        alert("Successfull");
    return true;
    }
        
}
    
function validateEmail(userdata)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(userdata.match(mailformat))
    {
        return true;
    }else
    {
       alert("Email does not match the format");
        return false;
    }  

function validatePassword(userdata)
{
    var passwrdformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(userdata.match(passwrdformat)){
        return true;
    }
    else
    {
        alert("Password does not match the format");
        return false;
    }
} 


}
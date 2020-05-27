//form validation
/*function validatePassword()
{   let name,password,msg;
    name=document.getElementById("p1").value;
    password=document.getElementById("p2").value;
    if(password==null || password=="")
    {
        msg="password can not be empty";
    }
    else if(password.length<8)
    {
        msg="password should be greater than 8 character";
    }
    document.getElementById("msg").textContent=msg;
}
*/
//confirmPassword

function confirmPassword()
{
    let name,password,password1,msg;
    name=document.getElementById("p1").value;
    password=document.getElementById("p2").value;
    password1=document.getElementById("p3").value;

    if(password1 === password1 )
    {
        alert("Both password are correct");
    }
    else{
        alert("password is incorrect");
    }
}

//value of input is number or not
function checkNumber()
{
    let number=document.getElementById("num").value;
    if(isNaN(number))
    {
        document.getElementById("check").innerHTML="input must be number only";
        return false;
    }
    else
    {
        return true;
    }
}

function emailValidation()
{
    let email,atposition,dotposition;
    
    email=document.getElementById("em").value;  
    atposition=x.indexOf("@");  
    dotposition=x.lastIndexOf(".");  
    
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
    {  
      alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
      return false;  
    }  
}  

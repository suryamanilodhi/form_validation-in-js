function formvalidation(){
    var user_input=document.getElementById('input1');
    var pass_input=document.getElementById('input2');
    flag=true;
    if(user_input.value.trim()==""){
        flag=false;
    
        user_input.style.border="2px solid red";
        document.getElementById('para1').innerHTML="please add data";
    }
    else if(user_input.value!==""){
        flag=false;
        document.getElementById('para1').innerHTML=" ";
        user_input.style.border="";
    }
    if(pass_input.value.trim()==""){
        flag=false;
        
        pass_input.style.border="2px solid red";
        document.getElementById('para2').innerHTML="paease add password";
    }
    else if(pass_input.value!==" "){
        flag=false;
        pass_input.style.border="";
        document.getElementById('para2').innerHTML="";
    }
    return flag;
}
formvalidation()


function validation2(){
    var email_input = document.getElementById('email_input').value;
    var flag = true;
    var email_regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    var password_input = document.getElementById('password_input2').value;
    var password_regex = /^(?=.*\d).{4,8}$/

    if(email_input.trim()==""){
        alert("Add your email");
        flag = false
    }
    else if(!email_input.match(email_regex)){
        document.getElementById('email_error').innerHTML  = " Non-Matches : Doesn't allow numbers in the domain name and doesn't allow for top level domains that are less than 2 or more than 3 letters (which is fine until they allow more). Doesn't handle multiple &quot;.&quot; in the domain (joe@abc.co.uk)."
        flag = false
    }
    else if(email_input.match(email_regex)){
        alert("good job right email id");
        document.getElementById('email_error').innerHTML =  "";
        flag = true;

        }

    if(password_input.trim()==""){
        alert("Add your password");
        flag = false
    }

    else if(!password_input.match(password_regex)){
        document.getElementById('password_error2').innerHTML = "Password must be between 4 and 8 digits long and include at least one numeric digit."
        flag = false
    } 
    return flag;
}  

function validation3(){
    var input1=document.getElementById('user_input').value;
    var flag=true;
    var input_regex=/^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\.[0-9][0-9])?$/ 
    if(input1.trim()==""){
        alert("please enter data");
        flag=false;
    }
    else if(!input1.match(input_regex)){
        document.getElementById('userinput_error').innerHTML="Matches US currency input with or without commas"
        flag=false;
    } 
    return flag;
}


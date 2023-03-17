var login_eye=document.querySelector(".login-eye-icon");
var input_login_pass=document.querySelector("#input-login-password");
var signup_eye=document.querySelector(".signup-eye-icon");
var input_signup_pass_1=document.querySelector("#input-signup-password-1");
var input_signup_pass_2=document.querySelector("#input-signup-password-2");

var inputPass=document.querySelector("#password");
var signuplink=document.querySelector("#signup");
var loginlink=document.querySelector("#login");
var formsignup=document.querySelector(".signup");




//更换页面 (login page to signup page, signup page to login page)
signuplink.addEventListener("click",function(){
    if(signuplink.classList=="signup-link")
    {
        formsignup.classList.replace("signup","signupYes");
    }
})
loginlink.addEventListener("click",function(){
    if(loginlink.classList=="login-link")
    {
        formsignup.classList.replace("signupYes","signup");
    }
})

//login page 的密码眼和文字的变动
login_eye.addEventListener("click",function(){
    if(login_eye.classList=="bx bx-hide eye-icon login-eye-icon")
    {
        input_login_pass.type="text";
        login_eye.classList.replace("bx-hide","bx-show");
    }
    else
    {
        input_login_pass.type="password";
        login_eye.classList.replace("bx-show","bx-hide");
    }
})

//signup page 的密码眼和文字的变动
signup_eye.addEventListener("click",function(){
    if(signup_eye.classList=="bx bx-hide eye-icon signup-eye-icon")
    {
        input_signup_pass_1.type="text";
        input_signup_pass_2.type="text";
        signup_eye.classList.replace("bx-hide","bx-show");
    }
    else
    {
        input_signup_pass_1.type="password";
        input_signup_pass_2.type="password";
        signup_eye.classList.replace("bx-show","bx-hide");
    }
})



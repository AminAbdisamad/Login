// hide the hints
$(".singup-form span").hide();
//declaration of the filds
let $email = $("#email");
let $password = $("#password");
let $confirmPassword = $("#confirmPassword");
let $submit = $("#submit");

// valid email format
function isEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( email );
  }
  // check the email validity
  function validateEmail(){
      if(!isEmail($email.val())|| $email.val() === ""){
          $email.next().show();
      }else{
        $email.next().hide();
      }
  }
// password length
  function isPasswordValid(){
    return $password.val().length > 8
  }
//check password validity 
  function passwordCheck(){
      if(isPasswordValid()){
          $password.next().hide();
      }else{
          $password.next().show();
      }
  }


  //Matching password
function arePasswordsMatching(){
    return $password.val() === $confirmPassword.val();
}
function passwordConfirmValidator(){
    if(arePasswordsMatching()){
        $confirmPassword.next().hide();
    } else{
        $confirmPassword.next().show();
    }

}

// submit 
function submit(){
    return isEmail() && isPasswordValid() && arePasswordsMatching();
}

//styling border when there's an error
/*function errorColor(){
    if($email === ""){
        $email = $email.css('border-color','red'); 
    }
    $password.css('border-color','red'); 
    $confirmPassword.css('border-color','red'); 

}*/
function enableSubmit(){
    
    return $submit.prop("disabled", !submit());
}



  $email.focus(validateEmail).keyup(validateEmail).keyup(enableSubmit);
  $password.focus(passwordCheck).keyup(passwordCheck)
            .keyup(passwordConfirmValidator).keyup(enableSubmit);
  $confirmPassword.focus(passwordConfirmValidator).keyup(passwordConfirmValidator);

  enableSubmit();
const inputPassword = document.getElementById("password");
const textStrength = document.getElementById("strength")

inputPassword.addEventListener("input", () => {
    const password = inputPassword.value;
    const strength = checkPasswordStrength(password)
    textStrength.innerText='The password strength is ' + strength;
})


function checkPasswordStrength(password) {

    let sterngth = 0;
    const length = password.length;

    // check for length;
    if (length >= 8) {
        sterngth += 1
    }

    // To check the number; // for this go to the REGEX.text
    if (/\d/.test(password)) {
        sterngth += 1
    }

    // to check the lowerCase latters

    if(/[a-z]/.test(password)){
        sterngth+=1
    }

    // to check the UpperCase latters

    if(/[A-Z]/.test(password)){
        sterngth+=1
    }

    // to check the spacial character
   
    if(/[\W_]/.test(password)){
        sterngth+=1
    }
   
   // for now we can return the password strength

   switch(sterngth){
      case 0:
      case 1:
      case 2:
        return  "week";
     case 3:
     case 4:
        return "moderet"   
     case 5:
        return "strong"   


   }

}
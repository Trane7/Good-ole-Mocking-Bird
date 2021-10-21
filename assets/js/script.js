// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {

}

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How long do you want your password, between 8-128 characters");
  if (passwordLength !== null) {
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Invaild input, please input between 8 and 128")
  }  
} 
  const includesLowerCase = confirm("Do you want to include any Lowercase letters?")
  const includesUpperCase = confirm("Do you want to include any Uppercase letters?")
  const includesNumbers = confirm("Do you want to include any Numbers?")
  const includesSpecial = confirm("Do you want to include any Special Characters?")
  const hasSelectorType = includesLowerCase || includesUpperCase || includesNumbers || includesSpecial;
  if (hasSelectorType) {
    
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

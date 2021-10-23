// Assignment code here
var numbers = "0123456789"
var lowerCase = "abcedfghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%^&*()-_+="

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword(length, isUpperCase, isLowercase, isSpecial, isNumbers) {
  let possibleChars = ""
  if (isUpperCase) {
    possibleChars += upperCase
  }
  if (isLowercase) {
    possibleChars += lowerCase
  }
  if (isSpecial) {
    possibleChars += special
  }
  if (isNumbers) {
    possibleChars += numbers
  }
  let password = "";
  for (var i = 0; i <= length; i++) {
    var randomNumber = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars.substring(randomNumber, randomNumber +1);
  } 

  console.log("worked");
  return password;
  
}

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How long do you want your password, between 8-128 characters");
  if (passwordLength !== null || passwordLength !== "") {
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Invaild input, please input between 8 and 128")
  }  
} 
  let includesLowerCase = confirm("Do you want to include any Lowercase letters?")
  let includesUpperCase = confirm("Do you want to include any Uppercase letters?")
  let includesNumbers = confirm("Do you want to include any Numbers?")
  let includesSpecial = confirm("Do you want to include any Special Characters?")
  let hasSelectorType = includesLowerCase || includesUpperCase || includesNumbers || includesSpecial;
  while (!hasSelectorType) {
    alert("At least one character type should be selected!")
     includesLowerCase = confirm("Do you want to include any Lowercase letters?")
     includesUpperCase = confirm("Do you want to include any Uppercase letters?")
     includesNumbers = confirm("Do you want to include any Numbers?")
     includesSpecial = confirm("Do you want to include any Special Characters?")
     hasSelectorType = includesLowerCase || includesUpperCase || includesNumbers || includesSpecial;
  }
    
  

  var password = generatePassword(passwordLength, includesUpperCase, includesLowerCase, includesSpecial, includesNumbers);
  var passwordText = document.querySelector("#password");


  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

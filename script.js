// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

generatePassword = function () {
  let generatePopup;
  let upperCase;
  let lowerCase;
  let numbersQuesadilla;
  let specialCharactersTaco;

  generatePopup = parseInt(
    prompt(
      "How many characters long do you want your password to be? Please enter a numeric value between 8 and 128."
    )
  );
  while (!generatePopup || generatePopup < 8 || generatePopup > 128) {
    alert("Please enter a number between 8 and 128");
    generatePopup = parseInt(
      prompt(
        "How many characters long do you want your password to be? Please enter a numeric value between 8 and 128."
      )
    )
  }
  if (generatePopup) {
    upperCase = confirm("Do you want UPPERCASE letters?");
    lowerCase = confirm("Do you want lowercase letters?");
    numbersQuesadilla = confirm("Do you want lowercase letters?");
    specialCharactersTaco = confirm("Do you want special characters?");
  }

  if (
    !upperCase &&
    !lowerCase &&
    !numbersQuesadilla &&
    !specialCharactersTaco
  ){
    alert("You entered no values, we can't make a password without values!");
    return ""; 
  }

  let userSelection = "";

  if (upperCase) userSelection += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowerCase) userSelection += "abcdefghijklmnopqrstuvwxyz";
  if (numbersQuesadilla) userSelection += "0123456789";
  if (specialCharactersTaco) userSelection += "!@#$%&*+(){}[]=_?/<>";

  let password = "";
  for (let i = 0; i < generatePopup; i++) {
    var randomIndex = Math.floor(Math.random() * userSelection.length);
    password += userSelection.charAt(randomIndex);
  }

  console.log(password);
  return password;
}





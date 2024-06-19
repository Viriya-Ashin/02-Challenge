// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add an event listener to the generate button to trigger password generation
generateBtn.addEventListener("click", writePassword);

// Function to write the generated password to the textarea
function writePassword() {
// Call the generatePassword function to create a new password
var password = generatePassword();
// Select the password textarea element
var passwordText = document.querySelector("#password");
// Set the value of the password textarea to the generated password
passwordText.value = password;
}
// Function to generate a secure password based on user input
generatePassword = function () {
  let generatePopup; // Variable to store the length of the password
  let upperCase; // Boolean to include uppercase letters
  let lowerCase; // Boolean to include lowercase letters
  let numbersQuesadilla; // Boolean to include numbers
  let specialCharactersTaco; // Boolean to include special characters

  // Prompt the user to enter the desired password length
  generatePopup = parseInt(
    prompt(
      "How many characters long do you want your password to be? Please enter a numeric value between 8 and 128."
    )
  );
  // Validate the user's input for password length
  while (!generatePopup || generatePopup < 8 || generatePopup > 128) {
    alert("Please enter a number between 8 and 128");
    generatePopup = parseInt(
      prompt(
        "How many characters long do you want your password to be? Please enter a numeric value between 8 and 128."
      )
    )
  }
  // Confirm the types of characters to include in the password
  if (generatePopup) {
    upperCase = confirm("Do you want UPPERCASE letters?");
    lowerCase = confirm("Do you want lowercase letters?");
    numbersQuesadilla = confirm("Do you want lowercase letters?");
    specialCharactersTaco = confirm("Do you want special characters?");
  }
  // Ensure at least one character type is selected
  if (
    !upperCase &&
    !lowerCase &&
    !numbersQuesadilla &&
    !specialCharactersTaco
  ){
    alert("You entered no values, we can't make a password without values!");
    return ""; 
  }
  // Build a string of possible characters based on user selection
  let userSelection = "";

  if (upperCase) userSelection += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowerCase) userSelection += "abcdefghijklmnopqrstuvwxyz";
  if (numbersQuesadilla) userSelection += "0123456789";
  if (specialCharactersTaco) userSelection += "!@#$%&*+(){}[]=_?/<>";
  // Generate the password by randomly selecting characters from the userSelection string
  let password = "";
  for (let i = 0; i < generatePopup; i++) {
    var randomIndex = Math.floor(Math.random() * userSelection.length);
    password += userSelection.charAt(randomIndex);
  }

  console.log(password); // Log the generated password to the console
  return password; // Return the generated password
}





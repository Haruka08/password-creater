// Assignment code here

// generatPassword function inside password variant in line 82
function generatePassword(length) {

  // variants for different charactor arrays
  var upper = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
  var lower = "abcdefghijklmnopqrstuwxyz";
  var num = "0123456789";
  var spe = "!@£#$%^&*()-_";
  var pinChoice = "";

    // checkes the user choice on number of characters and confirms their choice
    var length = prompt('How many charaters do you need for your password?');
    console.log(length);
      if (length===null){
        return;
      } 
      if (length < 8 || length > 128){
        length = prompt("Please choose numbers between 8 and 128");
        console.log(length);
      } 
      alert("Password to be " + length + " letters in length");

    // checkes whether to include uppercase letters in generated passoword and confirms their choice
    var uppercase = confirm('Would you like to include uppercase letters?');
    console.log(uppercase);
      if (uppercase === true){
        alert("Uppercase letters to be included in the password");
        pinChoice = pinChoice.concat(upper);
      } else {
        alert("Uppercase letters to be excluded in the password");
      }

    // checkes whether to include lowercase letters in generated passoword and confirms their choice
    var lowercase = confirm('Would you like to include lowercase letters?');
    console.log(lowercase);
      if (lowercase === true){
        alert("Lowercase letters to be included in the password");
        pinChoice = pinChoice.concat(lower);
      } else {
        alert("Lowercase letters to be excluded in the password");
      }

    // checkes whether to include numbers in generated passoword and confirms their choice
    var numeric = confirm('Would you like to include numbers?');
    console.log(numeric);
      if (numeric === true){
        alert("Numbers letters to be included in the password");
        pinChoice = pinChoice.concat(num);
      } else {
        alert("Numbers letters to be excluded in the password");
      }

    // checkes whether to include special letters in generated passoword and confirms their choice
    var special = confirm('Would you like to include special characters?');
    console.log(special);
      if (special === true){
        alert("Special letters to be included in the password");
        pinChoice = pinChoice.concat(spe);
      } else {
        alert("Special letters to be excluded in the password")
      }

      // if choices to all the choices are false, it prompts the user to choose at least one character type
      if (uppercase===false && lowercase===false && numeric=== false && special===false){
        alert("At least one charactor type required.  Please press Generate Password again to create a password.")
        return;
      } else {
      alert ("Following array of characters have been chosen to create " + length + " letter password: " + pinChoice);
      console.log(pinChoice);
      }

      // Randomly chooses letters from the arrays of characters selected by the user until it the number of letters picked is below the length of the password chosen by the user
      var pass = "";
        for (var i=0; i<length; i++){
          var randomOrder = Math.floor(Math.random() * pinChoice.length);
          console.log(randomOrder);
          pass = pass + pinChoice[randomOrder];
        }
      console.log(pass)
      return pass;
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generate(options = {}) {
    const defaultOptions = {
      length: 12,
      numbers: true,
      symbols: true,
      uppercase: true,
      excludeSimilarCharacters: true
    };
  
    // Merge default options with user options
    const finalOptions = Object.assign({}, defaultOptions, options);
  
    // Define character sets
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '~!@#$%^&*()_+-={}[]|:;"<>,.?/';
  
    let characterSet = lowercase;
  
    // Include uppercase letters
    if (finalOptions.uppercase) {
      characterSet += uppercase;
    }
  
    // Include numbers
    if (finalOptions.numbers) {
      characterSet += numbers;
    }
  
    // Include symbols
    if (finalOptions.symbols) {
      characterSet += symbols;
    }
  
    // Exclude similar characters
    if (finalOptions.excludeSimilarCharacters) {
      characterSet = characterSet.replace(/[iloLI0]/g, '');
    }
  
    let password = '';
    for (let i = 0; i < finalOptions.length; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      
      password += characterSet[randomIndex];
    }
  
    return password;
  }
  
  function checkPasswordStrength(password) {
    
    // Define criteria for weak, medium, and strong passwords
    const weakRegex = /^(?=.*[a-z])(?=.*\d).{6,}$/; // At least one lowercase letter, one digit, and minimum length of 6
    const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // At least one lowercase letter, one uppercase letter, one digit, and minimum length of 8
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{}|\\:;"'<>,.?/]).{12,}$/; // At least one lowercase letter, one uppercase letter, one digit, one special character, and minimum length of 12
  
    // Check if password meets criteria for weak, medium, or strong
     if (strongRegex.test(password)) {
      // If password is Strong, return the reason for strength
      return "<strong>Password is strong. Good job!</strong>";
    }
    else if (mediumRegex.test(password)) {
      // If password is medium, return the reason for medium strength
      return "Password is medium strength.\nIt must contain at least one lowercase letter, one uppercase letter, one digit, and have a minimum length of 8.\nConsider adding special characters and increasing length.";
    }
    else if (weakRegex.test(password)) {
      // If password is weak, return the reason for weakness
      return "Password is weak.\nIt must contain at least one lowercase letter, one digit, and have a minimum length of 6.\nConsider adding uppercase letters, special characters, and increasing length.";

    }   else {
      // If password does not meet any criteria, return an error message
      return "Password does not meet the minimum criteria for weak, medium, or strong passwords.";
    }
  }

  module.exports = {
    generate: generate,
    checkPasswordStrength: checkPasswordStrength
  };


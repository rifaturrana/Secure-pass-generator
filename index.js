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
  

module.exports = { generate};




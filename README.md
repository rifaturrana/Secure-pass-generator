# secure-pass-generator

> A simple, customizable password generator for Node.js

[![NPM Version][npm-image]][npm-url]
[![License][license-image]][license-url]

## Installation

```console
npm install secure-pass-generator 
```

## Usage
Here is an example of how to use Secure-pass-generator:

```console


const securePassGenerator = require('secure-pass-generator');


// Generate a random password with default settings
const password = securePassGenerator.generate();


console.log(password); // outputs a secure password


// Generate a password with custom settings
const customPassword = securePassGenerator.generate({
  length: 16,
  numbers: true,
  symbols: true,
  uppercase: true,
  excludeSimilarCharacters: true
});


console.log(customPassword); // outputs a customized secure password

```

## Options

Secure-pass-generator provides several customizable options to generate passwords that meet your specific needs:

length (number): The length of the password (default is 12). <br />
numbers (boolean): Whether to include numbers in the password (default is true). <br />
symbols (boolean): Whether to include symbols in the password (default is true). <br />
uppercase (boolean): Whether to include uppercase letters in the password (default is true). <br />
excludeSimilarCharacters (boolean): Whether to exclude similar characters (e.g. i, l, 1, L, o, 0) to avoid confusion (default is true).


## License
Secure-pass-generator is licensed under the MIT License. See LICENSE for more information.

## Contributing
Contributions are welcome! If you would like to contribute to this project, please read the CONTRIBUTING file for more information.

## Issues
If you find a bug or have a feature request, please create an issue on the issue tracker.

## Credits
Secure-pass-generator is developed and maintained byRifatur Rana. Thank you to all our contributors!

## Support
If you need help or have questions about Secure-pass-generator, please contact me at smrifaturrana@gmail.com.



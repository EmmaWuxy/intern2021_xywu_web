// Find length
let browserType = 'mozilla';
console.log(browserType.length);

//Retrieve a specific string character
console.log(browserType[0]); 
console.log(browserType[browserType.length-1]);

//Checking for the existence or location of substrings: indexOf()
console.log(browserType.indexOf('zilla')); //present
console.log(browserType.indexOf('vanilla')); //substring not present

//Slicing
console.log(browserType.slice(0,3));
console.log(browserType.slice(2));

//Changing case
let big = 'BIG';
console.log(big.toLowerCase());

let small = 'small'
console.log(small.toUpperCase());

// Updating parts of a string
// replace only the first occurance
let alphabet = 'abcdefgab'
newString = alphabet.replace('a','ooo');
console.log(newString);

//replace all occurances: global replacement
newString1 = alphabet.replace(/a/g,'ooo')
console.log(newString1);

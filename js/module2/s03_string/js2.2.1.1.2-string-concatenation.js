// Concatenation
let one = "Hello ";
let two = "how are you?";
let joined = one + two;
console.log(joined);

// Concatenation of variables and actual strings
let multiple = one + one + one + "I am fine - " + two;
console.log(multiple);

//Auto convertion from number to string
let front = 'Front' + 242;
console.log(front);

//Convert a string with wrong format to a number, get NaN
let wrongformat = '3+';
console.log(Number(wrongformat));
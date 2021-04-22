//Split string to multiple substring to store in an array
let date = 'Monday;Tuesday;Wednesday;Thursday;Friday;Saturday;Sunday';
let myArray1 = date.split(';');
console.log(myArray1);

let myArray2 = date.split('day;')
console.log(myArray2);

let myArray3 = date.split();
console.log(myArray3);

//Concatenate all elements in an array to a string
let myString1 = myArray1.join(); //default separator is ','
let myString2 = myArray1.join('**');
let myString3 = myArray1.join('');
let myString4 = myArray1.join(3);

console.log(myString1);
console.log(myString2);
console.log(myString3);
console.log(myString4);

//Add the last array items
arryLength = myArray1.push('ExtraDay');
console.log(myArray1, arryLength);

//Remove the last array items
removed = myArray1.pop();
console.log(myArray1, removed);

//Add the first array items
arryLength = myArray1.unshift('ExtraDay', 'anotherDay');
console.log(myArray1, arryLength);

//Remove the first array items
removed = myArray1.shift();
console.log(myArray1, removed);




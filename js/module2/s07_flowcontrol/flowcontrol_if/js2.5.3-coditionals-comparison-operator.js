// true/false evaluation

console.log('test false evaluation: \n');
// evaluate false
let test = false
if (test) { // don't need to explicitly specify '=== true'
  console.log(true);
} else {
  console.log(false);
}

//test undefined
test = undefined
if (test) { // don't need to explicitly specify '=== true'
  console.log(true);
} else {
  console.log(false);
}

//test null
test = null
if (test) { // don't need to explicitly specify '=== true'
  console.log(true);
} else {
  console.log(false);
}

//test 0
test = 0
if (test) { // don't need to explicitly specify '=== true'
  console.log(true);
} else {
  console.log(false);
}

//test NaN
test = Number('2*')
if (test) { // don't need to explicitly specify '=== true'
  console.log(true);
} else {
  console.log(false);
}

//test empty string
test = ''
if (test) { // don't need to explicitly specify '=== true'
  console.log(true);
} else {
  console.log(false);
}

console.log('\ntest true evaluation: \n');

//test number
test = 3
if (test) { // don't need to explicitly specify '=== true'
  console.log(true);
} else {
  console.log(false);
}

//test non-empty string
test = 'a string'
if (test) { // don't need to explicitly specify '=== true'
  console.log(true);
} else {
  console.log(false);
}

//test array
test = [1,2,3,4]
if (test) { // don't need to explicitly specify '=== true'
  console.log(true);
} else {
  console.log(false);
}

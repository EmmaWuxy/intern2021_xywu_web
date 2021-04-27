// myFunction(); //ReferenceError, since anonymous function is not hoisted

const myFunction = function(){
    console.log('This is my anonymous function');
}

myFunction();
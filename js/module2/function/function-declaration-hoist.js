/*
javascript Function 
hoisting

Function declaration is always hoisted, hence you can call function above function definition and it will work fine.
*/


printNumber(6); 

function printNumber(myNumber){
    console.log(myNumber);
}

printNumber(3);
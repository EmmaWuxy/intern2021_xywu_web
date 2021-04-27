printNumber(6); // Function declaration is always hoisted, hence you can call function above function definition and it will work fine.

function printNumber(myNumber){
    console.log(myNumber);
}

printNumber(3);
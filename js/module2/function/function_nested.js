/*
javascript function

define a function in another one
*/



function outer(){
    console.log("outer");

    function inner(){
        console.log("inner");
    }

    inner();
}


outer();

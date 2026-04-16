//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

(function chai(){//named IIFE
    console.log("DB CONNECTED");
    
})();//improratant for IIFE => ;

//Arrow function iife

( (name) =>  {//unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})('ruthvik');//need to give the parameter here 
const userEmail ="Ruth@gmail.com"//if there is anything in the string then the value is considered as tru or else false this is called truthy

if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("Dont have user email");
}

// falsy values => false,0,-0,BigInt 0n,"",null,undefined,Nan
//truthy values => true,"0"," ",[],{},function(){}

const userAccount = []

if(userAccount.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

//Nullish Coalescing Operator (??) : null undefined

let val1;

val1 = 5 ?? 10//5
val1 = null ?? 10//used for assigning null if the function call didnt return//10
val1 = undefined ?? 15//15

console.log(val1);

//Terinary operator

const teaPrice = 100
teaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


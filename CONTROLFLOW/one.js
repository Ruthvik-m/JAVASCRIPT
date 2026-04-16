//IF

// if(true){
//    executes
// }
// if(false){
//     not executes
// }

// '=' => (assigns value) | '==' => checks the value | '===' => checks the type

if(2 !== "3"){
console.log("executed");

}

const temprature = 41
if(temprature < 50){
    console.log("less than 50");
    
}
else{
    console.log("temprature greater than 50")
}

console.log("execute")

const score = 200

if(score > 100){
    const power ="fly"
    console.log(`User power : ${power}`);
}

console.log(`User power : ${power}`);//scope issue

const balance = 1000

if(balance > 500) console.log("test");//implicit scope 
if(balance > 500) console.log("test"),console.log("test2");//it is also possible => not recommended


if(balance < 500){
    console.log("less than");
}else if(balance < 750){
    console.log("less than 750");
    
}else if(balance < 900){
    console.log("less than 900");
    
} else {
    console.log("less than 1200");
    
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInfromEmail = true

if(userLoggedIn && debitCard){//the both conditions must be true with && operator
    console.log("Allow user to buy course");
    
}

if(loggedInFromGoogle || loggedInfromEmail){
    console.log("User got logged in");
    
}



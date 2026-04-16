let name = "Ruthvik"
let age = 22
let isLoggedIn = true


//PRIMITIVE DATA TYPES
//number => 2 to 2 tothe power 53
// bigint 
//string
//boolean
//null => standalone value (empty)
// undefined => not assigned the value to the variable 
//symbol => unique


 console.table([typeof name,typeof age,typeof isLoggedIn,typeof null,typeof undefined])
 console.log(typeof null)

// const id = Symbol('123')
// const anotherId = Symbol('123')
console.log(id === anotherId)// false => as return value is not same

//output => string,number,boolean,object,undefined
//object

//REFERCE TYPE (non primitive)
//Array,Objects,Functions


const heros = ["ironman","superman","spidername"];

let myObj = {
    name : "Ruthvik",
    age :  22
}

const myFunction = function(){
    console.log("Hey")
}

console.log(myFunction)

//Stack memory is used for primitive  => copy of variable
//Heap memory is used for non primitve => orginal value

let myYoutubename = "Ryugagamingff"
let anothername = myYoutubename
console.log(anothername)

anothername = "mbg"

console.log(anothername)
console.log(myYoutubename)
//refernce for the stack  memory concept

let userOne ={
    email: "user.google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ruthvik@gmail.com"

console.log(userOne.email)
//this directly changes the value that is stored in heap as it is non primitive it directly access the refernce value not the copy value


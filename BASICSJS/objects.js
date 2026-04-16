//Singleton
//Object.create

//object literals

const mySym = Symbol("key1")



const JsUser = {
    name : "ruthvik",
    "fullname " : "ruthvikMaddugaru",
    [mySym] : "mykey1",
    age : 22,
    location: "Viskhapatnam",
    email: "ruthvik.gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","saturday"]
}//cretes object

console.log(JsUser.email);//ruthvik.gmail.com
console.log(JsUser["email"])//ruthvik.gmail.com

//console.log(JsUser.fullname) cant access
console.log(JsUser["fullname "])//as in the object it is created as "fullname" i.e string
console.log(JsUser[mySym]);//now gives the datatype symbol

JsUser.email = "Ruth@gmail.com"
console.log(JsUser.email)//changes the email value 

//Object.freeze(JsUser)//cant change any values 

JsUser.email = "Vik@gmail.com"
console.log(JsUser)


 JsUser.greeting = function(){
    console.log("Hello")
 }// adds the function to the object

 console.log(JsUser.greeting());
 
 JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`)
 }

 console.log(JsUser.greetingTwo())


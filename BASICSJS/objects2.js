//const tinderUser = new Object()//output if we console.log(tinderUser) this => {}
const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name = "Ruthvik"
tinderUser.isLoggedIn = false 
//console.log(tinderUser);

//nested objects

const  regularUser = {
    email : "ruthvik@gmail.com",
    fullname: {
        userfullname:{
            firstname : "Ruthvik",
            lastname : "Maddugaru"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

//combining two objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = {obj1,obj2}//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
console.log(obj3);

const obj4 = {...obj1,...obj2}//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj4)

const obj5 = Object.assign(obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj5);

const obj6 = Object.assign({},obj1,obj2)
//here after merging the the answer will be stored in the {}=>object it is like target and reamining objects act like source
console.log(obj6);

// If it comes from databases usually it comes in array form of objects 

const users = [
    {
        id : 1,
        email : "1@google.com"
    },
     {
        id : 2,
        email : "2@google.com"
    },
     {
        id : 3,
        email : "3@google.com"
    }
    
]

console.log(users[1].email) // 2@google.com
//
console.log(tinderUser)
console.log(Object.keys(tinderUser));//keys => [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//values 
console.log(Object.entries(tinderUser));//comes in the form of array => [ [ 'id', '123abc' ], [ 'name', 'Ruthvik' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))//gives the boolean value wheather it is presnt in the object or not



const course = {
    coursename : "js",
    price : "999",
    courseInstructor : "ruthvik"
}

const {courseInstructor : instructor} = course// can assign our own name for the value in the object
console.log(instructor);

// JSON => JAVASCRIPT OBJECT NOTATION INTRO

// {
//     "name"   : "ruthvik",
//     "coursename" : "js",
//     "price" : "free"
// }







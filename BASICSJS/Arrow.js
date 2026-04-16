const user = {
    username : "Ruthvik",
    price : 999.,
    welcomeMessage : function(){
            console.log(`${this.username} ,welcome to website`);//this => signifies the current context inside the object
            console.log(this);
            
            
    }
}

// user.welcomeMessage()
// user.username = "rohi"
// user.welcomeMessage()

//console.log(this);//{.   // if i only run this => {}
//   username: 'rohi',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

// function chai(){
//     let username = "ruthvik"
//     console.log(this.username);//"this" works only in the objects not in function
    
// }

// chai()

// const chai = function (){//doent work here
//     let username = "Ruthvik"
//     console.log(this.username);
    
// }

// chai()

//Arrow functions
const chai =  () => {
    let username = "Ruthvik"
    console.log(this);
    
}

chai()


const addTwo = (num1,num2) => {
    return num1 + num2
}

//const addTwo = (num1,num2) =>  (num1 + num2) => works important in react

//const addTwo = (num1,num2) =>  ({username :" ruthvik"})//for object

console.log(addTwo(3,3));

// const myArray = [2,5,3,7,8]

// myArray.forEach()

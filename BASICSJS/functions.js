function sayMyName(){
    console.log("r");
    console.log("u");
    console.log("t");
    console.log("h");
}

//sayMyName()

// function addTwoNumbers(num1 , num2){
//        console.log(num1 + num2);
//     }
//const result = addTwoNumbers(2,3)
//console.log(result)//undefined as it is not returning anyting 

    function addTwoNumbers(num1 , num2){
       let result = num1 + num2
      // console.log("ruth");//this also gets prints anyting before return statement gets print
       
       return result
    }
addTwoNumbers()//NaN , need to give the parameters
const result = addTwoNumbers(2,3)//takes a any datatypes not only number
console.log("Result: " ,result);//gets the result as it is returning the number

function loginUSerMessage(username = "rohi"){//default value
    if(username === undefined){
         console.log("please enter a username");
         
    }
    return `${username} just logged in `
}

console.log(loginUSerMessage());


function calculateCartPrice(v1,v2,...num1){//[ 500 ] => as 200 ->v1,300-> v2 and remaining in the num1 array
      return  num1
}

console.log(calculateCartPrice(200,400,500));

const user ={
    username : "ruth",
    price  : 199
}

function handleObject(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username : "rohi",
    price : 399

})//directly giving the object in the parameter

const myNewArray = [200,400,100,600]

function returnSecondValue(arr){
    return arr[1]
}

console.log(returnSecondValue(myNewArray));

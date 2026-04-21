
//reduce
const myNums = [1,2,3]

const myTotal = myNums.reduce((acc,cv) =>{
    console.log(`acc: ${acc} and currentvalue ${cv}`);
    
    return acc + cv
},0 )// here "0" is for accumulator value where to start
console.log(myTotal);


const shoppingCart =[
    {
        itemName : "jscourse",
        price : "2500"
    },
    {
        itemName : "pythoncourse",
        price : "2999"
    },
    {
        itemName : "javacourse",
        price : "2890"
    },
    {
        itemName : "Ccourse",
        price : "2500"
    }
]

const bill = shoppingCart.reduce((acc,item) =>  Number(acc) + Number(item.price), 0)
console.log(bill);

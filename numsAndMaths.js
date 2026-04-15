//                     NUMBERS                               //

const score = 300
//console.log(score)// here js detects its a number 
const balance = new Number(200)
//console.log(balance)//specifally says its a number as a object

// console.log(balance.toString())
// console.log(typeof balance)

//console.log(balance.toFixed(2))// it will be giving output as 200.00 => gives the decimal values 


const otherNum = 23.8766
const otherNum1 = 123.8966
// console.log(otherNum.toPrecision(2));
// console.log(otherNum1.toPrecision(3));
//here the precision means according to the value in the precison it roundoffs till the numbers that to be there according to the value

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));
//gives the number with commas according to the indian number system,for US dont mention anything the brackets of toLocaleString()

//                        MATHS                           //
//console.log(Math)

// console.log(Math.abs(-7));//changes to positive
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.9));
// console.log(Math.floor(4.9))
// console.log(Math.min(4,3,6,8,9))
// console.log(Math.max(4,3,6,8,9))

console.log(Math.random())//range between 0-1
console.log((Math.random()*10 + 1))//gives the min of 1 if we do like this
console.log(Math.floor(Math.random()*10 + 1))

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min)







let score = "123"
//console.log(typeof score)

let valueInNumber = Number(score)
 //console.log(typeof valueInNumber)

 let mark = "33abd"
 //console.log(typeof mark)

 let valueInMark = Number(mark)
 //console.log(typeof valueInMark)
 //console.log(valueInMark); // output=> Nan(not a number)

 //if mark = null  the output of console.log(valueInMark) => 0
 //if mark = undefined  the output of console.log(valueInMark) => Nan
 //true => 1 / false => 0

 let isLoggedIn = 0
 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.table([typeof booleanIsLoggedIn,typeof isLoggedIn,booleanIsLoggedIn])
// "" => false / "ruthvik" => true

let xnumber = 33
let stringNumber = String(xnumber)
console.table([stringNumber,typeof xnumber,typeof stringNumber]);

//                   OPERATIONS                               //

let value = 3
let negValue = -value
//console.log(negValue) => -3

let str1 = "hey"
let str2 = " Ruthvik"
let str3 = str1 + str2

console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
console.log(1 + 2 + "2") // 32 => as it takes what type comes first

console.log(+"")//output => 0
console.log(+true)//output => 1
console.log(+false)//output => 0

let gameCounter = 100
console.log(++gameCounter);


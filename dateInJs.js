// Dates

let myDate = new Date()
// console.log(myDate.toString())//Wed Apr 15 2026 11:53:55 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString())//Wed Apr 15 2026
// console.log(myDate.toLocaleString())//4/15/2026, 11:55:06 AM
// console.log(typeof myDate)//object

//let myCreatedDate1 = new Date(2023,0,23)//month starts from 0
//let myCreatedDate2 = new Date(2023,0,23,9,5)//gives time also => 1/23/2023, 9:05:00 AM
//let myCreatedDate3= new Date("2023-01-23")//1/23/2023, 5:30:00 AM(yyyy-mm-dd)
let myCreatedDate = new Date("01-12-2023")//(mm-dd-yyyy) =>prefers in india. 1/12/2023, 12:00:00 AM
// console.log(myCreatedDate.toDateString());//Mon Jan 23 2023
// console.log(myCreatedDate.toLocaleString())//1/23/2023, 12:00:00 AM


let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())//milliseconds
//console.log(Math.floor(Date.now()/1000))//seconds =>1776235098

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleDateString('default',{
    weekday : "long",
    }))
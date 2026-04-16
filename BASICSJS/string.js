const name = "ruthvik"
const repoCount = 5

//console.log(name + repoCount + " Value")// Dont use this 

//console.log(`Hello my name is ${name} and my repocount is ${repoCount}` )//usethis

const gameName = new String('Black-777')//here sting is object

// console.log(gameName[0])
console.log(gameName.__proto__)//turns to object

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('7'))

const newString = gameName.substring(0,4)//4 is not included it is like[0,4)
console.log(newString)

const anotherString = gameName.slice(-9,-5)//indexing starts from the back for '-' only for slice not for substring
console.log(anotherString)

const oneString = "    ruthvik     "
console.log(oneString.trim());//removes starting and ending spaces
console.log(oneString.length)

const url = "https://ruthvik.com%20maddugharu"
console.log(url.replace('%20','-'));
console.log(url.includes('ruthvik'))

console.log(gameName.split('-'));//output is Array





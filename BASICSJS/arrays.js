//Arrays

const myArr = [1,2,3,3,4,true,"Ruthvik"]
//can be diffrent data type , can be resized
const myArr1 = new Array(1,2,3,4)
console.log(myArr[2])

//Array methods
myArr.push(6)//pushes the elemnet to the last
myArr.unshift(0)//pushes the element to the first
myArr.unshift(0)
myArr.shift()//removes the first element
console.log(myArr);
myArr.pop()//removes the last element in the array

console.log(myArr.includes(6))//checks wheather the element is there in the array or not
console.log(myArr.indexOf(4))//checks the index of the given element

const newArr = myArr.join()
console.log(newArr);//0,1,2,3,3,4,true,Ruthvik=>changes the tyoe to String

//slice,splice

console.log("A",myArr)


const myn1 = myArr.slice(1,3)// interval is [1,3) => includes beginning value and doesnt include the end value and it doesnt removes from the main array
console.log(myn1)
console.log("B",myArr)


const myn2 = myArr.splice(1,3)//includes both the beginning and the ending => [1,3] and also it removes the respective elements from the main array
console.log(myn2)
console.log("C",myArr)








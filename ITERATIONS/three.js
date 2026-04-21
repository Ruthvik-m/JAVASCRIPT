// for of 

//[{},{},{}]
//["","",""]

const arr = [1,2,3,4,5]

for (const num of arr) {
  console.log(num);
    
}
//output
//1
//2
//3
//4
//5


const greetings = "Hello world!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
    }
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is  
// Each char is w
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// Each char is !


// Maps
//no duplicates
const map = new Map()
map.set('IN','INDIA')
map.set('US','UNITED STATEDS')
map.set('CH','CHILE')
//console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
    
}

const myObj ={
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key,value] of myObj){
//     console.log(key,':-',value);
    
// }doesnt works for object
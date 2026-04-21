//for in 
const myObj = {
    js : 'javascript',//key =>js,myObj[key] => javascript
    cpp : 'c++',
    rb : "ruby",
    swift : 'swift by apple'
}

for (const key in myObj) {
   
   console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming =["js","rb","py","java","cpp"]

for(const key in programming){
    console.log(programming[key]);
    
}

// const map = new Map()
// map.set('IN','INDIA')
// map.set('US','UNITED STATEDS')
// map.set('CH','CHILE')

// for(const [key,value] in map){
//     console.log(map[key,value]);
    
// }//doent work
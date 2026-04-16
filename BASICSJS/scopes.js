

let a  = 20

if(true){
    let a = 10
    const b = 20
    // var c = 30
}//block scope

// console.log(a);
// console.log(b);
// console.log(c);
//works normallu but doesnt work in scopes {} as while declaring the value in the scope i.e locally the variable is declared globaaly but not with let and const


function one(){
    const username = "Ruthvik"

    function two(){
        const website = "yt"
        console.log(username);
        
    }
    //console.log(webiste);//cant aaccess
     two()

}

//one()

if(true){
    const username = "ruthvik"
    if(username === "ruthvik"){
        const webiste = "yt"
        console.log(username + webiste);
        
    }
    //console.log(website)//cant access
}

//console.log(username)//cant access

//                      INTRESTING                             //


console.log(addone(5));//this is also valid

function addone(num){
    return num + 1
}

console.log(addone(5));

console.log(addTwo(5));//is not valid 
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));

//BOTH ARE VALID IN DECLARING FUNCTIONS



//for each

// coding.forEach(function (val){// syntax for forEach accesing the array with the function call back with a variable that access the array 
//     console.log(val);

    
// } )

coding.forEach((val)=> {
        console.log(val);
        
})

function printMe(item){
    console.log(item);
    
}

coding.forEach(printMe)

coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
    
})

const myCoding =[
    {
        langName : "java",
        langFName : "java"
    },
    {
        langName : "python",
        langFName : "py"
    },
    {
        langName : "javascript",
        langFName : "js"
    }
]

myCoding.forEach((item) => {
     console.log(item.langName);
     
})
// for



for (let i = 0; i <= 10; i++) {
    const element = i;
   if(element == 5){
    console.log("5 is the best number");
    
   }
   console.log(element);
   
}//cmd + d => duplicate the change  and shift + option + down => duplicate the line and move down


for (let i= 0; i<=10; i++) {
    console.log(`outer loop value : ${i}`);
    
    for (let j = 0; j <= 10; j++) {
    // console.log(`inner loop value ${j} and inner loop ${i}`);
      console.log(`${i} * ${j} = ${i*j}`);
      //console.log(i + "*" + j + "=" + i*j);
      
       
        
     }
    
}

let myArray = ["flash", "superman", "batman", "wonder woman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}

//break and continue

for (let i = 0; i <= 20; i++) {
    
    if(i == 5){
        console.log(`detected 5`);
        break
    }
    console.log(`value of i is ${i}`);
    
    
}
for (let i = 0; i <= 20; i++) {
    
    if(i == 5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is ${i}`);
    
    
}
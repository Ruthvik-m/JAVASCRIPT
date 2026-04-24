const clock = document.getElementById('clock');
//const clock  = document.querySelector('#clock')'



//tells the interval it should be running 
setInterval(function(){
    let date = new Date();
//console.log(date.toLocaleTimeString());
 clock.innerHTML = date.toLocaleTimeString();

},1000);


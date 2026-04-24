# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project1

```javascript
const buttons = document.querySelectorAll('.button')
//console.log(buttons);gives the array with class button

const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){//EventListener adds different type of events like click hover etc etc
         console.log(e)//PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
         console.log(e.target)//depends on which color i clicked  <span class="button" id="yellow"></span>
         if(e.target.id === 'grey'){
            body.style.backgroundColor =e.target.id
         }
         if(e.target.id === 'white'){
            body.style.backgroundColor =e.target.id
         }
         if(e.target.id === 'blue'){
            body.style.backgroundColor =e.target.id
         }
         if(e.target.id === 'yellow'){
            body.style.backgroundColor =e.target.id
         }
         if(e.target.id === 'purple'){
            body.style.backgroundColor =e.target.id
         }
    })
});

```
## project 2 solution

```javascript
const form = document.querySelector('form')
//this usecase will give you the empty as before submitting right
//const height =  parseInt(document.querySelector('#height').value)


form.addEventListener('submit',function(e){
    e.preventDefault()//doesnt submit in default it waits

   const height =  parseInt(document.querySelector('#height').value)//as it default gives the string
   const weight =  parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
       const bmi =  (weight / ((height*height)/1000)).toFixed(2)//decimal will be giving to two
       //show the result 
       results.innerHTML = `<span>${bmi}</span>`
    }


}) 



```

## project3

```javascript
const clock = document.getElementById('clock');
//const clock  = document.querySelector('#clock')'



//tells the interval it should be running 
setInterval(function(){
    let date = new Date();
//console.log(date.toLocaleTimeString());
 clock.innerHTML = date.toLocaleTimeString();

},1000);
```

## project 4

```javascript
let randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess =  parseInt(userInput.value)
       validateGuess(guess)
    })
}



function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if (guess < 1){
        alert('Please enter a number greater than 1')
    }else if (guess > 100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guessed it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is tooo low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is tooo High`)
    }
}

function displayGuess(guess){
        userInput.value = ``
        guessSlot.innerHTML += `${guess}   `
        numGuess++;
        remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
        lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
   const newGameButton =  document.querySelector('#newGame')
   newGameButton.addEventListener('click',function(e){
             randomNumber = (parseInt(Math.random() * 100 + 1));
            prevGuess =[]
            numGuess  = 1 
            guessSlot.innerHTML = ''
            remaining.innerHTML = `${11 - numGuess}`;
            userInput.removeAttribute('disabled')
            startOver.removeChild(p)
            playGame = true 
   })
}


```
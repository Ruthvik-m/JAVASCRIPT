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

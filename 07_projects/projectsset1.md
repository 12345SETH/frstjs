# Projects Related To DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code 

## Project 1 
``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")
buttons.forEach((button)=>{
  console.log(button);
  button.addEventListener('click',(event)=>{
  console.log(event);
  console.log(event.target);
  if(event.target.id === 'grey'){
    body.style.backgroundColor ='grey'
  }
  if(event.target.id === 'white'){
    body.style.backgroundColor ='white'
  }
  if(event.target.id === 'blue'){
    body.style.backgroundColor ='blue'
  }
  if(event.target.id === 'yellow'){
    body.style.backgroundColor ='yellow'
  }
  if(event.target.id === 'pink'){
    body.style.backgroundColor = 'pink'
  }
  })
})

```

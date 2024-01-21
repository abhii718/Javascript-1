# project related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project  1;

          
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector('body');

    buttons.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click',    function (func) {
    // console.log(func);
    // console.log(func.target);
    if (func.target.id === 'grey') {
      body.style.backgroundColor = func.target.id;
    }
    if (func.target.id === 'white') {
      body.style.backgroundColor = func.target.id;
    }
    if (func.target.id === 'blue') {
      body.style.backgroundColor = func.target.id;
    }
    if (func.target.id === 'yellow') {
      body.style.backgroundColor = func.target.id;
     }
    });
    });

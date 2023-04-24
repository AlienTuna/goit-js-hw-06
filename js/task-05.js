/*
Write a script that, when typing in the input#name-input input (input event), 
substitutes its current value into span#name-output. If the input is empty, 
the span should display the "Anonymous" string.

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/

const nameEl = document.querySelector('#name-output');
const nameInputEl = document.querySelector('#name-input');
nameInputEl.addEventListener('input', () => {
    if (nameInputEl.value === ''){
    nameEl.textContent = 'Anonymous';
    }
    else {
        nameEl.textContent = nameInputEl.value;
    }
})
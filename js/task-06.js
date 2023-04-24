/*
Write a script that, when focus on input is lost (blur event), 
checks its contents for the correct number of entered characters.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

    The number of characters in the input is specified in its data-length attribute.
    If the number of characters entered is correct, the input's border turns green, 
    or red with a wrong number.

To add styles, use the valid and invalid CSS classes, which you can find in the task source files.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/

const inputEl = document.querySelector('#validation-input');
console.log(inputEl);
inputEl.addEventListener('blur', () => {
    const dataLength = +inputEl.getAttribute('data-length');
    const currentText = inputEl.value;
    inputEl.classList = '';
    if (currentText.length === dataLength) {
        inputEl.classList.add('valid');
    }
    else {
        inputEl.classList.add('invalid');
    }
})
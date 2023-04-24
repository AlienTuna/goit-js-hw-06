/*
Write a script that changes the background colors of the <body> element via inline 
style when clicking on button.change-color and outputs the color value to span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Use the getRandomHexColor function to generate a random color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('button.change-color');
const spanEl = document.querySelector('span.color');

btnEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  const color = getRandomHexColor();
  spanEl.textContent = color;
  document.querySelector('body').setAttribute('style', `background-color: ${color};`)
}
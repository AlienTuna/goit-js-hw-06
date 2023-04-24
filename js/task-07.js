/*
Write a script that responds to changes in the value of 
input#font-size-control (input event) and changes the inline 
style of span#text by updating the font-size property. As a 
result, the text size will change responding to scrollbar dragging.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
*/

const scrollEl = document.querySelector('input#font-size-control');
scrollEl.addEventListener('input', onScrollInput)

function onScrollInput() {
    const currentSize = +scrollEl.value
    document.querySelector('span#text').setAttribute('style', `font-size: ${currentSize}px;`)
}
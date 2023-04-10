/*
In HTML, there is an empty ul#ingredients list.

<ul id="ingredients"></ul>

In JavaScript, there is an array of strings.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

Write a script that, for each element in the ingredients array:

    Will create a separate <li> element. 
    Be sure to use the document.createElement() method.
    Will add the ingredient name as its text content.
    Will add the item class to the element.
    Then will insert all <li> to the ul#ingredients list in a single operation.
*/


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(element => {
  const newEl = document.createElement('li');
  newEl.textContent = element;
  newEl.classList.add('item')
  document.querySelector("#ingredients").appendChild(newEl)
});
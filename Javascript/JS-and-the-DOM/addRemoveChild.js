const addItemButton = document.querySelector('Button.addItemButton');
const removeItemButton = document.querySelector('Button.removeItemButton');


addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];//this returns a COLLECTION; since there is only 1 item, we can access it with [0]
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li); //take the newly creates variable and add it to the "li"
    addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];//this returns a COLLECTION; since there is only 1 item, we can access it with [0]
  let li = document.querySelector('li:last-child');
  ul.removeChild(li); //take the newly creates var and add it to the "li"
});
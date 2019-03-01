// Capture the value of user input from an "input" html tag


const input = document.querySelector('input');
const p = document.querySelector('p.description');

button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
})
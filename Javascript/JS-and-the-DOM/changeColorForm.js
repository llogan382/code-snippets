// Changes color of background based on user input from ID, "My text input"

const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');


myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
});
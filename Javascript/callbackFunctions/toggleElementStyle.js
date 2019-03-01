/* Toggle an element and apply the style via event listener. 
*If element is not focused, remove the class name "highlight."
* "Blur" is the opposite of focus.
*/

// Create variables and get elements
const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

// Store the function as a variable
const focusHandler = event => {
    // Add class of "highlight" if clicked
    event.target.className = 'highlight';
};
// Add class of " " if another element is clicked. 
const blurHandler = event => {
    event.target.className = '';
};

// When element is clicked, add function "focushandler" which will 
// add the classname
nameInput.addEventListener('focus', focusHandler);

// Listen if another element is clicked - the opposit of "focus"
// is "blur" - and run the function "blurHandler"
nameInput.addEventListener('blur', blurHandler);

// Do the same thing as above. 
messageTextArea.addEventListener('focus', focusHandler);
messageTextArea.addEventListener('blur', blurHandler);
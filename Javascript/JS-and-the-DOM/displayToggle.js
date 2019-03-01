// Target a list, and show/hide items if the button is clicked.

// Button has ID of "toggleList" and the ul is in a div ".list"
// This will change the text on the button from "hide list" to "show list" depending on whether the list is currently displayed

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const button = document.querySelector('button.description');

toggleList.addEventListener('click', () => { //when the toggle is clicked:
    if (listDiv.style.display == 'none') { //if the Div with class list is set to NONE:
      toggleList.textContent = 'Hide list'; //changes button text depending on status
      listDiv.style.display = 'block'; //change the display style to "block"
    } else {  // else change the display to "none"
      toggleList.textContent = 'Show list';                        
      listDiv.style.display = 'none';
    }                         
  });                   
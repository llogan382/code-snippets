
// Change items to uppercase on mouseover. 

const listItems = document.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i+=1 ) {
    listItems[i].addEventListener('mouseover', () => {
        listItems[i].textContent = listItems[i].textContent.toUpperCase();
    });
    listItems[i].addEventListener('mouseout', () => {
        listItems[i].textContent = listItems[i].textContent.toLowerCase();
    });
}
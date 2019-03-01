// Loops over elements in LI, and applies style

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i ++ ) {
    myList[i].style.color = 'purple';
}
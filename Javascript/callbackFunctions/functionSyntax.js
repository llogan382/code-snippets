/*
Three Ways to call the same function
*/

// Option 1: regular function
function sayHello(){
    console.log('hello');
}
executeCallback(sayHello);


// Option 2: Arrow function. 
() => {
    console.log('Hello');
}
// OR just use the arrow function like this:
executeCallback(() => console.log('Hello'));


// Option 3:
// Call the function as an anonymous function
executeCallback( function () {
    console.log('Hello');
});



executeCallback( function () {
    console.log('GoodBye');
});


function executeCallback( callback ){
    callback();
};
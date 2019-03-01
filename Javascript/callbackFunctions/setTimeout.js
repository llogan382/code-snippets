// Targets id of "Surprise" and displays the textcontent after 
// a random amount of time between 1 and 7 seconds

const surpriseSection = document.getElementById('surprise');


const randomTime = Math.floor(Math.random()*7)*1000;
console.log(randomTime);

setTimeout( () => 
    surpriseSection.textContent = '🎉 Surprise! 🎉', randomTime );
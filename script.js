const msgEl = document.getElementById('msg');


const randomNum = getRandomNumber();

console.log('Number:' ,randomNum);

window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// Start recognition and game
recognition.start();

function onSpeak(e){
    const msg = e.results[0][0].transcript;
   
    // writeMessage(msg);
    // checkNumber(msg);
}


//Generate random number
function getRandomNumber() {
   return Math.floor(Math.random() * 100) + 1;
}


// Speak result
recognition.addEventListener('result', onSpeak);
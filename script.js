const minLabel = document.getElementById('min');
const secLabel = document.getElementById('sec');
const millisecLabel = document.getElementById('millisec');

const startbutton = document.getElementById('startbtn');
const stopbutton = document.getElementById('stopbtn');
const pausebutton = document.getElementById('pausebtn');
const resetbutton = document.getElementById('resetbtn');

const lapList = document.getElementById('laplist');

let min = 0;
let sec = 0;
let millisec = 0;
let interval;

startbutton.addEventListener('click',startTimer);
stopbutton.addEventListener('click',stopTimer);
pausebutton.addEventListener('click',pauseTimer);
resetbutton.addEventListener('click',resetTimer);

function startTimer(){
    interval = setInterval(updateTimer,10);
    startbutton.disabled = true;
}

function stopTimer(){
    clearInterval(interval);
    addToLapList();
    resetTimerData();
    startbutton.disabled = false;
}

function pauseTimer(){
    clearInterval(interval);
    startbutton.disabled = false;
}

function resetTimer(){
    clearInterval(interval);
    resetTimerData();
    startbutton.disabled = false;
}

function updateTimer(){
    millisec++;
    if(millisec === 100){
        millisec = 0;
        sec++;
        if(sec === 60){
            sec = 0;
            mim++;
        }
    }

    displayTimer();
}

function displayTimer(){
    millisecLabel.textContent = padTime(millisec);
    secLabel.textContent = padTime(sec);
    minLabel.textContent = padTime(min);
}

function padTime(time){
    return time.toString().padStart(2,'0');
}

function resetTimerData(){
    min = 0;
    sec = 0;
    millisec = 0;
    displayTimer();
}

function addToLapList(){
    const lapTime = `${padTime(min)}:${padTime(sec)}:${padTime(millisec)}`;

    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}:</span>${lapTime}`;
    lapList.appendChild(listItem);
}
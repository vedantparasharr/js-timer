let interval;
let time = 0;

// select display for timer
let timerDisplay = document.querySelector('.display-text');
function timer() {
    interval = setInterval(() => {
        time++;
        let minutes = Math.floor(time/60);
        let seconds = time%60;
        
        let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
        
        timerDisplay.innerHTML = `<p>${formattedMinutes}:${formattedSeconds}</p>`;
        
    }, 1000);
}

//Buttons

let startBtn = document.getElementById("start-btn");
let resetBtn = document.getElementById("reset-btn");
let pauseBtn = document.getElementById("pause-btn");
let resumeBtn = document.getElementById("resume-btn");


// Start button (to start again after reset)
startBtn.addEventListener('click', () => {
    startBtn.style.display = "none";
    pauseBtn.style.display = "inline";
    clearInterval(interval); 
    timer();
});

// Pause button
pauseBtn.addEventListener('click', ()=> {
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "inline";
    clearInterval(interval);
})

// Resume button
resumeBtn.addEventListener('click', ()=> {
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "inline";
    timer();
})

// Reset button

resetBtn.addEventListener('click', () => {
    startBtn.style.display = "inline";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
    clearInterval(interval);
    time = 0;
    document.querySelector('.display-text').innerHTML = `<p>00:00</p>`;
});
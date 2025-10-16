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

// Reset button
let resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    time = 0;
    document.querySelector('.display-text').innerHTML = `<p>00:00</p>`;
});

// Start button (to start again after reset)
let startBtn = document.getElementById("start-btn");
startBtn.addEventListener('click', () => {
    clearInterval(interval); // avoid multiple intervals stacking
    timer();
});

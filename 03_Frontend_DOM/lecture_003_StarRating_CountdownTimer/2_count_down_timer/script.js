/** 
 *  Must have features 
        * Pass time i hours, minutes and seconds.
        * play and pause button.
        * phase 1: Validation check and print timer on console.
        * phase 2: All button should work and UI update.
        * phase 3: Validation so that if user enters any timer greater than 60, then it should move to left bit.
        * 
 *  JavaScript:
           a. We have to listen to five event listners -> H,M,S, Start, Pause, reset, continue
           b. Validation check
           c. Update UI
           
        Edge Case:
           Reset Option.
 */

// Buttons.
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const continueBtn = document.getElementById("continue");
const resetBtn = document.getElementById("reset");


// Input Elements.
const hoursInput = document.getElementById("hr");
const minutesInput = document.getElementById("min");
const secondsInput = document.getElementById("sec");

let SECOND_IN_HOUR = 3600;
let SECOND_IN_MINUTES = 60;

let counterId;
let saveTimeLeft;

resetSetup();



// EVENT LISTNERS
startBtn.addEventListener("click", (event) => {
    // 1. Take inputs and validate it.
    let hours = getValidInput(hoursInput.value);
    let minutes = getValidInput(minutesInput.value);
    let seconds = getValidInput(secondsInput.value);

    if (!validateInputTime(hours, minutes, seconds)) {
        return;
    }

    let countDownTimer = hours * SECOND_IN_HOUR + minutes * SECOND_IN_MINUTES + seconds;
    runTimer(countDownTimer);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
    continueBtn.style.display = "none";
    resetBtn.style.display = "block";
});

pauseBtn.addEventListener("click", (e) => {

    // Pause the process.
    clearInterval(counterId);

    // No change in UI.

    startBtn.style.display = "none";
    pauseBtn.style.display = "none";
    continueBtn.style.display = "block";
    resetBtn.style.display = "block";
});

continueBtn.addEventListener("click", (e) => {
    // Continue the timer.
    runTimer(saveTimeLeft);

    // No change in UI.

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
    continueBtn.style.display = "none";
    resetBtn.style.display = "block";
});



resetBtn.addEventListener("click", (event) => {
    resetSetup();
});



// Helper Methods.
function resetSetup() {
    // Change is UIL: reset UI.
    hoursInput.value = "00";
    minutesInput.value = "00";
    secondsInput.value = "00";

    // reset Process.
    saveTimeLeft = 0;
    clearInterval(counterId);

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    continueBtn.style.display = "none";
    resetBtn.style.display = "none";
}

function runTimer(countDownTimer) {
    counterId = setInterval(() => {
        saveTimeLeft = countDownTimer--;

        updateUiEverySecond(countDownTimer);

        if (countDownTimer < 0) {
            clearInterval(counterId);
            return;
        }
    }, 1000);

}

function updateUiEverySecond(countDownTimer) {
    let hours = Math.floor(countDownTimer / SECOND_IN_HOUR);
    let minutes = Math.floor((countDownTimer % SECOND_IN_HOUR) / SECOND_IN_MINUTES);
    let seconds = Math.floor(countDownTimer % 60);

    // console.log(hours + ":" + minutes + ":" + seconds);
    updateUI_Hours_Min_Sec(hours, minutes, seconds);
}

function updateUI_Hours_Min_Sec(hour, minute, second) {
    hoursInput.value = hour < 10 ? `0${hour}` : hour;
    minutesInput.value = minute < 10 ? `0${minute}` : minute;
    secondsInput.value = second < 10 ? `0${second}` : second;

}

function getValidInput(value) {
    return parseInt(!value ? 0 : value);
}

function validateInputTime(hours, minutes, seconds) {
    if (hours < 0 || minutes < 0 || seconds < 0) {
        alert("Negative value's are not allowed.");
        return false;
    } else if (hours > 24) {
        alert("Hour is greater than 24 which is not a valid hour.");
        return false;
    } else if (minutes > 60) {
        alert("Minute is greater than 60 which is not a valid Minute.");
        return false;
    } else if (seconds > 60) {
        alert("Second is greater than 60 which is not a valid Second.");
        return false;
    }

    return true;
}
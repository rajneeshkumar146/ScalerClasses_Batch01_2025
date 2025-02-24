/*****setTimeout -> clearTimeout****/
// Statement 1:
// console.log("Before");
// function cb() {
//     console.log("Set-timouts cb has been called");
// }
// setTimeout(cb, 1000);

// Statement 2:
// console.log("Before");

// function cb() {
//     console.log("Set-timouts cb has been called");
// }
// const timerId = setTimeout(cb, 1000);
// // console.log("TimerId: ", timerId);

// function canceller() {
//     console.log("Canelling the timeout execution.");
//     clearTimeout(timerId);
// }
// setTimeout(canceller, 4000);


// console.log("After");

/************setInterval, clearInterval*********/
console.log("Before");

// // Satement 1:
// function cb() {
//     console.log("Interval called " + Date.now());
// }
// setInterval(cb, 2000);

// Statement 2:
function cb() {
    console.log("Interval called " + Date.now());
}
const timerId = setInterval(cb, 1000);
// console.log(timerId);

function cancelInterval() {
    console.timeEnd();
    console.log("cancelling the interval timer");
    clearInterval(timerId);
}

console.time();
setTimeout(cancelInterval, 5000);


console.log("After");

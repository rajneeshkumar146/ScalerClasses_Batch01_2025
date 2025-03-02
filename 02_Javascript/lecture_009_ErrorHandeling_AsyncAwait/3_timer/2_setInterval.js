/***
 * create polyfill of setInterval with the help setTimeout
 * 1. setInterval -> settimout that is called at a given interval again and again
 *  Learning : whenever you want to have single source of truth -> non-primitive
 * 2. clearInterval  : 
 * */

function mySetInterval(cb, delay) {
    let timerIdObject = {
        flag: true
    }

    function helperMethod() {
        if (timerIdObject.flag) {
            cb();
            setTimeout(helperMethod, delay);
        }
    }

    setTimeout(helperMethod, delay);
    return timerIdObject;

}

function clearMyInterval(timerIdObject) {
    timerIdObject.flag = false;
}

/*******usage****/
function cb() {
    console.log("I will be called on every interval: " + Date.now())
}

let timerIdObject = mySetInterval(cb, 1000);

function cancelInterval() {
    console.timeEnd();
    console.log("cancelled th cb");
    clearMyInterval(timerIdObject);
}

console.time();
setTimeout(cancelInterval, 5000);

console.log("After");
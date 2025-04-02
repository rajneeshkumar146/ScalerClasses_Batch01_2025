function debounce(cb, delay = 500) {
    let timeoutId = null;
    return function (...args) {
        if (timeoutId) {
            console.log("Resting the timmer");
            clearTimeout(timeoutId);
        }


        timeoutId = setTimeout(() => {
            cb(...args);
            timeoutId = null;
        }, delay);
    }
}

function printHello() {
    console.log("Hi all!, Hello from my side.");
}

const debouncePrintHello = debounce(printHello, 2000);
debouncePrintHello();


setTimeout(() => {
    debouncePrintHello();
    setTimeout(() => {
        debouncePrintHello();
    }, 3000);
}, 1000);



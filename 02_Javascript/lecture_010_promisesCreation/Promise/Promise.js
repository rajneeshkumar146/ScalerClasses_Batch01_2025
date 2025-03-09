// function promiseSetTimeout(delay) {
//     function executorFn(resolve, reject) {
//         setTimeout(function () {
//             resolve("Hi There!!!!");
//         }, delay);
//     }
//     return new Promise(executorFn);
// }

// const myPromise = promiseSetTimeout(1000);
// myPromise.then((data) => {
//     console.log("Result: ", data);
// }).catch((err) => {
//     console.log("Error: " + err);
// });

const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

// function constructor 
function CustomPromise(executorFn) {
    // Add required properties and methods
    let State = PENDING;
    let Value = undefined;
    let scbArr = [];  // Success callback's array/queue.
    let fcbArr = [];  // Failure callback's array/queue.

    // attach resolve.
    const resolve = (value) => {
        // If result of a promise is already defined in that case we can't revisit the promise.
        if (State !== PENDING) {
            return;
        }

        State = RESOLVED;
        Value = value;

        // Call your all success from scbArr.
        scbArr.forEach((cb) => {
            cb(Value);
        });


    }

    // attach reject.
    const reject = (value) => {
        // If result of a promise is already defined in that case we can't revisit the promise.
        if (State !== PENDING) {
            return;
        }

        State = REJECTED;
        Value = value;

        // Call your all failures from fcbArr.
        fcbArr.forEach((cb) => {
            cb(Value);
        });
    }

    // Most Important: Don't forget to call your executor function.
    executorFn(resolve, reject);

    // Thread `then` with the resolve.
    this.then = function (cb) {
        if (State === RESOLVED) {
            cb(Value);
        } else {
            scbArr.push(cb);
        }
    }

    // Thread `catch` with the reject.
    this.catch = function (cb) {
        if (State === REJECTED) {
            cb(Value);
        } else {
            fcbArr.push(cb);
        }
    }
}


const executorFn = (resolve, reject) => {
    // Cb based fn for resolved state.
    setTimeout(() => {
        resolve("Hey I'm resolved!!!!");
    }, 2000);

    // Cb based fn for rejected state.
    setTimeout(() => {
        reject("Hey I got rejected! with error: .....");
    }, 3000);
}



// ***************** usage of your custom *****************
const myPromise = new CustomPromise(executorFn);

const cb = (data) => {
    console.log(data);
}

myPromise.then(cb);

myPromise.then((data) => {
    console.log("I am the second then");
});

myPromise.then((data) => {
    console.log("I am the third then: ", data);
});

myPromise.catch((err) => {
    console.log("Error: ", err);
})

myPromise.catch((data) => {
    console.log("I am the second catch");
});
const eventEmitter = require("events");

const myEmitter = new eventEmitter();


// listners.
myEmitter.on("myEvent", (...args) => {
    console.log("Listen 1, There is a new event! ", args);
});

myEmitter.on("myEvent", (...args) => {
    console.log("Listen 2, There is a new event! ", args);
});

const secondCb = (...args) => {
    console.log("Callback Listen for the new event! ", args);
    console.log("-----------------------------")
}

// listner and fire cb.
myEmitter.on("myEvent", secondCb);

// do not listen.
myEmitter.off("myEvent", secondCb);


// emit an event.
// myEmitter.emit("myEvent");
myEmitter.emit("myEvent", 1, 2);
// myEmitter.emit("myEvent", [1, 2, 3]);
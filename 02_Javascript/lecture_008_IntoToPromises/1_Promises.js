const fs = require("fs");

/**
 * Promise based fn -> do not take  cbs
 * -> the outcome of the promise is determined by the function that will give you the promise.
 * **/

console.log("Before");


// task has started when fn is called 
const promise = fs.promises.readFile("./f1.txt");

/**
 * State of the promise-> pending
 * */
console.log(promise);

setTimeout(() => {
    console.log("I am here to read file after 2 sec.");
    console.log("Value of Promise: " + promise);

}, 2000);

console.log("After");
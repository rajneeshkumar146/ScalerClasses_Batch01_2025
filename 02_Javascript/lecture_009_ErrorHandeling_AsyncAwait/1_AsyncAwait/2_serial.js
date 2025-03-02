let fs = require("fs");

console.log("before");

// async function fn() {
//     try {
//         let data1 = await fs.promises.readFile("./f1.txt");
//         console.log("content: " + data1);

//         let data2 = await fs.promises.readFile("./f2.txt");
//         console.log("content: " + data2);

//         let data3 = await fs.promises.readFile("./f3.txt");
//         console.log("content: " + data3);
//     } catch (err) {
//         console.log("Err: ", err);
//     }
// }

// let rVal = fn();
// console.log("rVal from 21:", rVal);

/*** they are a syntax sugar over **/
// IIFE or self calling method.
(async function fn() {
    try {
        let data = await fs.promises.readFile("./f1.txt");
        console.log("content: " + data);

        let data1 = await fs.promises.readFile("./f2.txt");
        console.log("content: " + data1);

        let data2 = await fs.promises.readFile("./f3.txt");
        console.log("content: " + data2);

        return "rval from fn";
    } catch (err) {
        console.log("Error: " + err);
    }

})();


console.log("after");

/*****
 * async keyword fn always return a pending promise so either await for or use then 
 * 
 * 
 * **/ 
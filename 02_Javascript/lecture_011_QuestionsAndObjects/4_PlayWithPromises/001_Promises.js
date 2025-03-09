// let p = new Promise(function (resolve, reject) {
//     // reject("some error e1");  // This line will only work here.
//     resolve("some result");  // This line will only work here.
// });

/** Statment 1 */
// p.then((res) => {
//     console.log(8);
//     console.log(res);
// }).catch(() => {
//     // do nothing.
// });

// p.catch(function (err) {
//     console.log(13);
//     console.log(err);
// });

// then can listen both success and failure it have two parameters.
// p.then(function (res) {
//     console.log(20);
//     console.log(res);
// }, function (err) {
//     console.log(23);
//     console.log(err);
// }).finally(function () {
//     console.log("28: ", 1);
// });

/**
 * finally does not take any argumenst -> forwards the argument recieved
 * finally will not return any thing except error. If you try to return something that is not error it will going to get ignored.
 * */

const fs = require("fs");

// p.finally(function () {
//     console.log("finally: ", 2);
//     // throw new Error("Hello");
//     return Promise.resolve("some Error");
// }).finally(function () {
//     console.log("finally: ", 3);
//     return fs.promises.readFile("f1.txt");
// }).then(function (val) {
//     console.log("then with finally:", val);
// }).catch(function (err) {
//     console.log("catch with finally: ", err);
// });

// Promise.resolve(1)
//     .then(() => 2)   // ~then(function(){return 2}), Means we are ignoring res.
//     .then((data) => {
//         console.log("68: ", data);
//         return 3
//     }).then((value) => {
//         console.log(value);
//         return value * 3;
//     }).then(console.log)  //~ .then((data) => console.log(data))


// Promise.reject(1).
//     catch((err) => {
//         console.log("3: ", err);
//         return 10;
//     }).then((data) => {
//         console.log("6: ", data)
//     }).catch(console.log);

// Promise.reject(1)
//     .finally((data) => {
//         console.log("3", data)
//         return Promise.reject('error')
//     })
//     .catch(console.log)
//     .then((data) => {
//         console.log("19: ", data)
//     })
//     .then((data) => {
//         console.log("19: ", data)
//     })
//     .catch(console.log);

/***
 * chain -> then-> promise above is resolved
 * catch -> promise of the above is rejected / throw an error
 * if you have mixture and either then returns a value / catch return -> then will executed with the recieved value
 * finally -> finally works in both resolve or reject but  -> when you reject inside a finally then you upcoming catch will be called 
 * finally -> doesnot take any input / if you retrun either error/ rejected promise -> you need a catch to consume
 * 
 * **/


Promise.resolve(1)
    .finally((data) => {
        console.log("32: ", data)
        return Promise.reject('error');
    })
    .catch((error) => {
        console.log("36: ", error)
        throw 'error2'
    })
    .finally((data) => {
        console.log("40: ", data)
        let rProm = Promise.resolve(41)
        let thenProm = rProm.then(console.log)
        return thenProm;
    })
    .then(console.log)
    .catch(console.log);

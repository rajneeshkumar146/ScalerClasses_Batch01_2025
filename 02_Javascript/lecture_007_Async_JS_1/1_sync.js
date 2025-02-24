/****
 * Synchronous code-> the code that excutes line by line
 * **/

// console.log("Before");
// function fn(){
//     console.log("I'm in function.")
// }
// fn();
// console.log("After");

/***
 * Asynchronous code -> piece of code is executed at current point of time
 *  and other piece of code is executed on later part
 * 
 * */

// Statement 1:
// console.log("Before");
// function fn(){
//     console.log("I'm in function.");
// }
// setTimeout(fn, 2000);
// console.log("After");


// // Statement 2:
// let a = true;
// console.log("Before: ", a);

// setTimeout(() => {
//     a = false;
//     console.log("I will broke the while loop: ", a);
// }, 1000);

// // wait for 2sec in series operation.
// // let timeFuture = Date.now() + 2000;
// // while(Date.now() < timeFuture){}
// console.log("After: ", a);

// // This is a infinite loop, Which never ends because series operation have higher periority as per the event loop.
// // while (a) { }

// Statement 3:
console.log("Before");
const cb2 = () => {
    console.log("set timeout 1");
    let timeInfuture = Date.now() + 5000;

    console.log("Before while loop: ", Date.now());

    // Wait for 5 sec.
    while (Date.now() < timeInfuture) {}

    console.log("After while loop: ", Date.now());

}

const cb1 = () => {
    console.log("hello");
    console.log("After cb2: ", Date.now());
}

console.log("Start Time: ", Date.now());
setTimeout(cb2, 1000)

setTimeout(cb1, 2000)

console.log("After");


/****
 * Environemt: Browser
 *     Web API Stack:
 *        [Important] console.log -> it is not the part of JS
 *         Window -> it is not the part of JS         
 *         document -> it is not the part of JS 
 *         fetch -> it is not the part of JS 
 *         eventListner -> it is not the part of JS....
 * Enviorment: Node js
 *         console.log -> it is not the part of JS
 *         fs -> it is not the part of JS
 *         http -> it is not the part of JS 
 *         child_process -> it is not the part of JS...
 * 
 * Thumbrule:
 *      -> Environment provide you the features.
 *      -> JS provide you the logic.
 *      -> Programming lang.
 *                 [C++ -> Java] : Pointers were take care of.
 *                 [Java -> JS]  : There are no threads tp take care of.
 *  Inference : You cannot create an asynchronous fns as a programmer -> Enviornment 
 */
// Question: 02
// function outerFunction() {
//     console.log("first line of outerfunction: ", count);
//     var count = 0;
//     function innerFunction() {
//         count++;
//         return count
//     }
//     console.log("second line of outerfunction: ", count);
//     count++;
//     return innerFunction
// }

// const innerFunc = outerFunction();
// console.log(innerFunc());
// console.log(innerFunc());

// const innerFunc2 = outerFunction();
// console.log(innerFunc2());
// console.log(innerFunc2());

// Question: 02
// function createCounter(init, delta) {
//     function count() {
//         init = init + delta;
//         return init;
//     }
//     return count;
// }
// let c1 = createCounter(10, 5); 
// let c2 = createCounter(5, 2);

// console.log(c1())  
// console.log(c2())

// console.log(c1()) 
// console.log(c2())

/***
 * Nested closure : you will get access to outer variable even if the 
 * outer fn is not your direct parent
 * */

let iamINGEC = 200;
// function getFirstName(firstName) {
//     console.log("I have got your first Name");
//     iamINGEC++;
//     return function getLastName(lastName) {
//         console.log("I have got Your last Name");
//         iamINGEC++;
//         return function greeter() {
//             console.log(`Hi I am ${firstName} ${lastName}`);  // closure 
//             console.log("Hi GEC", iamINGEC) // Lexical scope
//             iamINGEC++;
//         }
//     }
// }

// const lastNameRtrn = getFirstName("Rajneesh");
// const greeterRtrn = lastNameRtrn("Kumar");
// greeterRtrn();   // iamINGEC=201;

// greeterRtrn();  // iamINGEC=202
// greeterRtrn(); //  iamINGEC=203
// console.log("Final Value: ", iamINGEC);

/***
 * Application of closures 
 * 1. currying : taking one input at a time and you use the input later 
 * 2. asynchrounous code cannnot run without closure 
 * **/

/*--------------------------------- Currying ---------------------------------**/
// Builder pattern: https://www.dofactory.com/javascript/design-patterns/builder

/*get all the inputs at once -> we can execute the code */
// function greeter(firstName, lastName) {
//     console.log(`Hi I am ${firstName} ${lastName}`);  // closure 
// }
// greeter("Rajneesh", "kumar")

// function getFirstName(firstName) {
//     console.log("I have got your first Name");
//     return function getLastName(lastName) {
//         console.log("I have got Your last Name");
//         return function greeter(deduction) {
//             console.log(`Hi I am ${firstName} ${lastName}`);  // closure 
//             console.log("here is your deduction: ", deduction)
//         }
//     }
// }

// const getLastName = getFirstName("Jasbir");   // persoanl Information.

// console.log("Task in between");
// console.log("Task in between");
// console.log("Task in between");

// const greeter = getLastName("Singh");   // parent related personal information.

// console.log("Task in between");
// console.log("Task in between");
// console.log("Task in between");

// greeter(100);    // ask for all kind of deductions and display the entire result.
// console.log("Task in between");
// console.log("Task in between");
// console.log("Task in between");

// Shorthand

// getFirstName("Debasish")("Brahma")(100);

/*--------------------------------- asynchrounous code  ---------------------------------**/
let a = 100;
console.log("Before");

function cb() {
    console.log("I will explode", a);
}

setTimeout(cb, 2000);
// for (let i = 0; i < 1000; i++) {
//     a++;
// }
console.log("After");   // Async + closures are responsible for such kind of behaviour.
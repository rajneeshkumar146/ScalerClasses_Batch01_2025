// var a = 10;
// console.log("line number 2", a);
// function fn() {
//     var a = 20;
//     console.log("line number 4", a);
//     a++;
//     console.log("line number 7", a);
//     if (a) {
//         var a = 30;
//         a++;
//         console.log("line number 11", a);
//     }
//     console.log("line number 13", a);
// }
// fn();
// console.log("line number 16", a);

// statement 2.
// var f = 5;
// function fn() {
//     f = 6;
// }
// fn()
// console.log(f)

// var f = 5;
// function fn() {
//     var f = 6;
// }
// fn()
// console.log(f)

// ****************** var ************

// // reassign
// var a=10
// a=20;
// console.log("value of a at line no 38: ", a);

// // redeclared -> yes 
// var a=30;
// console.log("value of a at line no 42: ", a);


// rajneesh = "hello";   // It become part of global object.
// console.log("value of rajneesh at line no 45: ",rajneesh);   // output: undefined
// console.log(window)

// ********** let *************
// reassign -> yes
// redeclaration -> is not possible
// let a=10;
// a=20; 
// console.log("value of a at line no 54: ", a);
// let a; // throw error.


// Statement 2: temporal dead zone
// let Hoisting -> undefined
// before declaration let and const variables cannot be accessed ->
//  temporal dead zone

// console.log("value of a at line no 54: ", a);
// let a = 10; 


// Statement 3: block scope
// block -> {

// }

// let a = 10;
// {
//     let a = 20;
//     console.log("value of a at line no 75: ", a);
// }
// console.log("value of a at line no 77: ", a);

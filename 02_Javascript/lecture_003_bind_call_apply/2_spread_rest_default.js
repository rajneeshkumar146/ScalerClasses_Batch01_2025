// Statement 1 ---------------------------------------------------------------
/**
 * default parameter 
 * **/

// function fn(param1, param2, param3 = "Suraj Suri") {
//     console.log("Hi params are: ", param1, param2, param3);
// }

// fn("Hi", "Hello", "Hola");
// fn("Hi", "Hello");

// Statement 2 ---------------------------------------------------------------
/**
 * spread operator : copies value,ref from on array to another for only first level
 * 
 * */


//Statement 1:  assignment operator -> reference remain
// let arr = [1, 2, 3, 4, 5];

// // arr2 and arr has the same ref
// let arr2 = arr;    // Shallow copy
// arr2.pop();
// arr2.push(100);
// arr2[2] = 200;
// // arr2 = 300;
// console.log("actual array", arr);
// console.log("modified array", arr2);

//Statement 2 ----------------------------------------------
// let arr = [1, 2, [3, 4], 5, 6];
// // [value,value,ref,value,value]

// // // spread copies value  from one array another array for the first level
// let arr2 = [...arr];    // partial deep copy till level 1.
// arr2.pop();
// arr2.push(100);
// arr2[2][0] = 500;
// // arr2 = 300;
// console.log("actual array", arr);
// console.log("modified array", arr2);

// Statement 3 ---------------------------------------------------------------

// let a = 10;
// //copied value -> primitive types 
// let b = a;    // Deep copy not shallow copy

// let arr=[1,2,3,4];
// you get the ref
// let arr2=arr;   // shallow copy

// let arr = [1, 2, [3, 4], 4, 5];
// [value,value,ref,value,value]

// let arr2 = [...arr];   // partial deep copy or I say actual copy of array.

/****
 * rest -> It is used as paremeter of fn .
 *  use you to collect remianing parameters numbers of params . 
 * ***/

function fn(param1, ...param2) {
    console.log(" params are ", param1);
    console.log("Rest paramateres", param2);
}

// spread : means iterate the value, rest means : gathers elements into an array
fn("Hi", "Hello");
fn("Hi", "Hello", "manisha", "Suraj", "Umang", "Ganesh", "Priyank");

let arr = [10,20,30,40];
console.log("Spread: ", ...arr);

// ...(...arr) == arr
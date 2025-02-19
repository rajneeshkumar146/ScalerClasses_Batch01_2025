/**
 * outer scope  : Every function has access to it's vars/lets
 * as well as any variable deaclared outside.
 * */

// var x = 10;
// function fn(){
//     var x = 20;
//     console.log("current value of x is: ", x);
// }
// fn();

// var varName = 10;
// function b() {
//     console.log("In function b the value of varName: ", varName);   // 20
// }

// function fn(callback) {
//     var varName = 20;
//     callback();
//     console.log("In function fn the value of varName: ", varName);  // 20
// }
// fn(b);

// let varName2 = "I'm here";
// function fn(){
//     let varName1 = 10;
//     function inner(){
//         console.log(varName1);
//         console.log(varName2);
//     }

//     inner();
// }

// fn();


/**
 * b -> varName -> outer scope  -> fn defintion
 * 
 * JS says that outer scope is lexically scoped -> your fn definiton
 * */ 
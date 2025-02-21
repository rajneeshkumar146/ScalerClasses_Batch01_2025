/**
 * ways to create object in js
 * 1. object literal
 * 2. Object.create 
 * **/


// let obj = {
//     name: "Steve",
//     address: {
//         state: "Newyork",
//         city: "Manhatten"
//     },
//     sayHi: function () {
//         console.log(`${this.name} say's Hi`);
//         // console.log("object this: ", this);
//         return this;
//     }
// };

// console.log("Object", obj);
// obj.sayHi();
// console.log("Object This: ", obj.sayHi());

/* Different data types and there parents. **/
// let arr = [1,2,3,4];
// console.log(arr, " some operation: ", arr.indexOf(2));
// console.log(obj);

// // String case ---------------
// let str = "Hi My name is Rajneesh";
// console.log("Typeof: ", typeof str, " and it's value is: ", str);
// console.log(str.charAt((1)));

// console.log("Let see prototype of String: ", new String("Hi My name is Rajneesh"));

// // Number case  ---------------
// let value = 10;
// console.log("Typeof: ", typeof value, " and it's value is: ", value);
// console.log("Let see prototype of Number: ", new Number(value))

// // Boolean case  ---------------
// console.log("Let see prototype of Number: ", new Boolean(true))


/*
* **************************Inbuilt object works ***************
* 1. array -> Array(Object/class) -> Object
* 2. function -> Function -> Object
* 3. object -> Object 

*    For primitive : temporary parent
* *  num -> Number  -> Object
* *  str -> String -> Object
* *  boolean -> Boolean -> Object
* *  null and undefined -> no parent
* *  etc 
*     whenever you want to access any method or property
*      then that  primitive is typecased as a 
*      children of there respective parent class and 
*      then that method is applied on that non primitive 
*      you are returned the answer. -> autoboxing
* */

/**********2. Object create ******/

/****1. you create an object without any parent**/
// let obj1 = new Object();
// obj1.name = "Rajneesh Kumar";
// console.log("obj1: ", obj1);

// let obj2 = Object.create(null);
// obj2.name = "Rajneesh Kumar Yadav";
// console.log("obj2: ", obj2);

// let obj = {
//     name: "Steve",
//     address: {
//         state: "Newyork",
//         city: "Manhatten"
//     },
//     sayHi: function () {
//         console.log(`${this.name} say's Hi`);
//         console.log("object this: ", this);
//         return this;
//     }
// };

// let obj3 = Object.create(obj);
// obj3.name = "Rajneesh";
// obj3.lastName = "Kumar";
// console.log("obj3: ", obj3);

/********2. creating an object from another object*/

let obj = {
    name: "Steve",
    address: {
        state: "Newyork",
        city: "Manhatten"
    },
    sayHi: function () {
        console.log(`${this.name} say's Hi`);
    }
};

let obj2 = Object.create(obj);
// console.log(obj2);

/**overriden the name prop*/
obj2.name = "symphony";
obj2.lastname = "rogers";
// console.log("1.", obj2.name, " ", obj2.lastname, obj2.address);
// console.log("2. ", obj.lastname);   // Relation is only unidirectional.

// Is `Obj` is parent of `obj2`: True
// console.log(obj.isPrototypeOf(obj2));

// Is `Obj2` is parent of `obj`: False
// console.log(obj2.isPrototypeOf(obj));

//That will give you the parent of obj2.
// console.log(Object.getPrototypeOf(obj2));

let obj3 = Object.create(obj2);
obj3.friends = ["tony", "bruce"]
obj3.fullName = obj2.name + " " + obj2.lastname;
obj3.age = 25;
console.log(obj3);

//  loop -> object -> for in loop -> iterate over all the prop of the object , 
// inherited which are enumrable to for in

// for (let key in obj3) {
//     console.log("Keys are ", key);
// }

/********for in loop for your own poperties******/
// 1.
// <= O(1 * N)

// for(let key in obj3){
//     let isMyKey = obj3.hasOwnProperty(key);
//     if(isMyKey){
//         console.log("Actual key's are: ", key);
//     }
// }

// Question: Can you write a loop to print all members of my object but you need to ignore member of all parent and gParent class. And Can you optimize that operations.
// for(let key in obj3){
//     let isMyKey = obj3.hasOwnProperty(key);
//     if(isMyKey){
//         console.log("Actual key's are: ", key);
//     }else{
//         break;
//     }
// }
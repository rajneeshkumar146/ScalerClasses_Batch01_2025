// The Symbol data type in JavaScript is a unique and immutable value that is guaranteed to be a unique identifier 
// and can be used as a property key in objects. They are often used to prevent property key collisions when working with objects.


// const str1 = "hello";
// const str2 = "hello";  // this line will not create a new address instead they use the previous address of str1.(concept is intern-pool memory)
// console.log(str1.localeCompare(str2) == 0);   

/**
 * a.localCompare(b) have 3 values: -1, 0, 1  
 * localCompare: is case sesitive.
 * -1: a is bigger than b in terms of ASCII values.
 * 0: a and b are equal in terms of ASCII values.
 * 1: b is bigger than a in terms of ASCII values.
 * 
 */

// Statement 1
// const a = "A"; 
// const b = "a"; 
// console.log(a.localeCompare(b));


// Statement 2
// const a = "réservé"; // With accents, lowercase
// const b = "RESERVE"; // No accents, uppercase

// console.log(a.localeCompare(b));
// // Expected output: 1
// console.log(a.localeCompare(b, "en", { sensitivity: "base" }));
// // Expected output: 0


// Statement 3
// var char1 = new String('a');   // Forcing to create a new address.
// var char2 = new String('a');  // Forcing to create a new address.
// console.log(char1 === char2);    // `===` in string not compare char to char instead they compare addresses.
// console.log(char1.localeCompare(char2) === 0); 

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// console.log(arr1 === arr2);


// Statement 1:
// let sym = Symbol("hi");   // It will always create a new address.
// let sym2 = Symbol("hi"); // It will always create a new address.
// console.log("symbol", sym);
// console.log("symbol", sym2);
// console.log(sym === sym2);


// Statement 2:
let sym1 = Symbol("hi");   // It have a unique address.
let sym2 = Symbol("hi");   // It have a unique address.
let obj = {
    "key1": "Hello",
    key2: "hi",
    [sym1]: "hello2",   // It is not iterable so I can treat this as a symbol.
    [sym2]: "hello3"   // It is not iterable so I can treat this as a symbol.
}

for(let key in obj){
    console.log(key ," : ", obj[key]);
}

console.log("65: ", obj);
console.log("66: ", obj[sym1]);
console.log("66: ", obj[sym2]);
console.log("66: ", obj[Symbol("hi")]);    // It have a unique address.


// We have created two symbols (symbol1 and symbol2) with the same description.
// However, symbols are always unique, so symbol1 and symbol2 are not equal.
// We then use a symbol as a property key in an object (person), demonstrating how symbols can be used to avoid property key collisions.
// Additionally, we show how to access the description of a symbol.
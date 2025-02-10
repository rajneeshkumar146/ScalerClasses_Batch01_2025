// 1s statement.
var a; // always undefined.
console.log("Value of a: ", a);
a = 10;
console.log("Value of a: ", a);
a = "abc";
console.log("Value of a: ", a);
a = 'abcdefgh'
console.log("Value of a: ", a);

// 2nd statement: There is no difference between single and double quote string.
var age = 15;
var name = 'Rajneesh';
var c = "Hi my name is " + name + ' and age is ' + age;
console.log("value of c: ", c);

var d = "hi" +
    "hello";
console.log("value of d: ", d); // it will create a sinle line statement.

// 3rd statement: for template string using `` to store multiple lines of string and '${}' to refer any value.
var s3 = `Hi my name is ${name}
and my age is ${age}, How are you doing
today?`;
console.log("Value of s3: ", s3);

// 4th statement.
var e;
console.log("typeof a where constent is: " + e + " -> ", typeof e);
e = 10;
console.log("typeof a where constent is: " + e + " -> ", typeof e);
e = "abc123";
console.log("typeof a where constent is: " + e + " -> ", typeof e);
e = 'abc11234';
console.log("typeof a where constent is: " + e + " -> ", typeof e);
e = 'a';
console.log("typeof a where constent is: " + e + " -> ", typeof e);
e = `abcdedf + ${name}`;
console.log("typeof a where constent is: " + e + " -> ", typeof e);
e = true;
console.log("typeof a where constent is: " + e + " -> ", typeof e);

// 5th ststement: In Js number is treated as 64 bit floating number.
var f = 5 / 2;
console.log("value of f: ", f);
console.log("typeof a where constent is: " + f + " -> ", typeof f);


// 6th statement.
var g = [10, 20.5, "abc", "def", true, [1,2,"dsf", 45]];
// g = {};
console.log("value of g: ", g);
console.log("value of g: ", typeof g);
console.log("value of g: ", Array.isArray(g));

// Toggle Characters
function toggleCharacter(str){
    let ans = "";
    let capitalA = "A".charCodeAt(0);
    let capitalZ = "Z".charCodeAt(0);
    let smalla = "a".charCodeAt(0);
    let smallz = "z".charCodeAt(0);

    for(let i = 0; i< str.length; i++){
        let charcode = str.charCodeAt(i);
        if(charcode >= capitalA && charcode <= capitalZ){
            var code = charcode - capitalA + smalla;
            ans += String.fromCharCode(code);
        }else if(charcode >= smalla && charcode <= smallz){
            var code = charcode - smalla + capitalA;
            ans += String.fromCharCode(code);
        }else{
            ans += str.charAt(i);
        }
    }

    return ans;
}

console.log(toggleCharacter("aBCDdcb123*&^"));

// 7th statement: [Important: why typeof null is object?]
// It is a bug in js which they can't change now, reason is binary code of null is zero and 
// zero treated as a object.
console.log("typeof of null: ", typeof null);

 


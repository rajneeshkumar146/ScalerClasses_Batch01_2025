// statement 1 ----------------------------------------
// native object and a host object

// Enviornment ->
//  host object ->browser//  window,document,localstorage
// host object -> nodejs -> global, os ,process

// JS -> given by language 
// native object -> Date, JSON,Object

// var firstVar = "steve";
// let secondVal = "loki";

// console.log("first: ", window.firstVar);
// console.log("second: ", secondVal);
// console.log("Hello from: ", this);   // In GEC this = window.
// console.log("first: ", this.firstVar);

// let cap = {
//     // property
//     firstName: "Steve",
//     // method
//     sayHi: function () {
//         console.log("Hi from ", this.firstName);
//     }
// }

// cap.sayHi();
// let sayHiAdd = cap.sayHi;

// var firstName = "loki";
// sayHiAdd();

// rules for this
// GEC -> this -> window object
// EC is created with -> method call -> this will be that object, Example: cap.sayHi()
// EC is created with -> function call -> this will be that window, Example: let a =  cap.sayHi and then a(). 

/********************** Question 2 ******************/
// let cap2 = {
//     firstName: "Steve",
//     sayHi: function (param) {
//         console.log("47", this.firstName);
//         const iAmInner = function (param) {
//             console.log("49", this.firstName);
//         }
//         // EC by this kind of call -> window
//         iAmInner(20);
//     }
// }

// EC by this -> cap
// cap2.sayHi(10);

// iamInner -> this =window, param=20
// cap.saHI -> param=10, this = cap2
// GEC

/*****************Question3 *******************/
// // var -> GEC 
// let cap3 = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("53", this.firstName);
//         // arrow ->  does not have it's own this. I am going to cheat it from outside
//         const iAmInner = () => {
//             console.log("55", this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap3.sayHi();

// rules for this
// GEC -> this -> window object
// EC is created with -> method call -> this will be that object
// EC is created with -> function call -> this will be that window
// Arrow function doesn't bother about above rules -> it takes this from outside(nearest scope)

// let cap4 = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("91", this.firstName);
//         // arrow ->  does not have it's own this. I am going to cheat it from outside 
//         const subInner =  () => {
//             console.log("94", this.firstName);
//             const iAmInner = () => {
//                 console.log("95", this.firstName);
//             }
//             iAmInner();
//         }
//         subInner();
//     }
// }
// cap4.sayHi();


let cap5 = {
    firstName: "Steve",
    sayHi: function () {
        console.log("109", this.firstName);
        // arrow ->  does not have it's own this. I am going to cheat it from outside 
        const subInner = () => {
            console.log("94", this.firstName);
            const iAmInner = function () {
                console.log("114", this.firstName);

                // const iAmSuperInner = function () {
                //     console.log("117", this.firstName);
                // }

                const iAmSuperInner = () => {
                    console.log("117", this.firstName);
                }
                iAmSuperInner();
            }
            iAmInner();
        }
        subInner();
    }
}
// cap5.sayHi();
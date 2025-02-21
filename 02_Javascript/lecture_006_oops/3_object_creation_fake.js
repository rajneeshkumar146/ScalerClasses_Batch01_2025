/****function constructor before es6*******************/

// function Person(name, age) {
//     // console.log(this);
//     this.name = name;
//     this.age = age;
//     this.sayHi = function () {
//         console.log(`I am ${this.name} and ${this.age} years old`);
//         return this;
//     }

//    return this.sayHi();
// }

// console.log(Person("Rajneesh", 26));   // Treat this as a function.

// const rajneeshVariable = new Person("Rajneesh", 27);  // Treat this as a object.
// console.log(rajneeshVariable)


/******class  after es6*********/
//  class -> strict mode 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`I am ${this.name} and ${this.age} years old`);
    }

    sayBye() {
        console.log(`I am ${this.name} and ${this.age} years old, Have a nice day!`);
    }
}

class SuperHuman extends Person {
    constructor(name, age) {
        super(name, age)
    }
    sayHi() {
        console.log(`I am ${this.name} and ${this.age} years old, I want to say Hi!`);
    }
}

const rajneesh = new Person("Rajneesh", 26);
console.log(rajneesh);
rajneesh.sayHi();


const Debasish = new SuperHuman("Debasish", 25);
console.log(Debasish);
Debasish.sayHi();
Debasish.sayBye();

/***
 * inheritance :  code sharing , saving memory 
 * Prototype is : 
 * In JS we create object from an object ->  that object is your parent or prototype ->that chain goes on 
 * Prototypal Inheritance : you inherit the properties from a parent object/ prototype and that inheritance.
 * */
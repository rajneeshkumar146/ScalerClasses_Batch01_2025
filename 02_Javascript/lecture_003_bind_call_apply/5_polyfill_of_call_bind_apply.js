let cap = {
    name: "Steve",
    team: "Cap",
    petersTeam: function (mem1, mem2) {
        console.log(`Hey ${this.name} I am your neighborhood's  
        spiderman and i belong to ${this.team}'s team with members  ${mem1} ${mem2}`);
    }
}

let ironMan = {
    name: "Tony",
    team: "Iron Man",
}

//Call -> It is on Function -> 

// Statement 1.-------------------------------------------------
// Function.prototype.myCall = function() {
//     console.log("Hi Call is invoked");

//     console.log("I want to know this: ", this);
// }

// cap.petersTeam.myCall();



// Statement 2.-------------------------------------------------
/**
 * polyfill of call method
 * **/
Function.prototype.myCall = function (requiredObject, ...arrayAsArgument) {
    // get your function.
    const functionToBeInvoked = this;

    // copy your function in the requiredObject for temp basis.
    requiredObject.tempFunction = functionToBeInvoked;

    // Call your function.
    requiredObject.tempFunction(...arrayAsArgument);

    // Delete temp method.
    delete requiredObject.tempFunction;
}

// cap.petersTeam.myCall(ironMan, "thor", "loki",);

// Statement 3.-------------------------------------------------
/**
 * polyfill of apply method
 * **/
Function.prototype.myApply = function (requiredObject, arrayAsArgument) {
    // get your function.
    const functionToBeInvoked = this;

    // copy your function in the requiredObject for temp basis.
    requiredObject.tempFunction = functionToBeInvoked;

    // Call your function.
    requiredObject.tempFunction(...arrayAsArgument);

    // Delete temp method.
    delete requiredObject.tempFunction;
}


// let memberssArray = ["thor", "Rajneesh", "loki", "Manisha", "Suraj", "Priyank", "Umang"];
// let memberssArray = ["thor", "loki"];  // Max size of array allowed is 2 because of 2 argument.
// cap.petersTeam.myApply(ironMan, memberssArray);


// Statement 4.-------------------------------------------------
/**
 * polyfill of bind method
 * **/
Function.prototype.myBind = function (requiredObject) {
    // get your function.
    const functionToBeInvoked = this;

    return function (...arrayAsArgument) {
        functionToBeInvoked.call(requiredObject, ...arrayAsArgument);
    }

}



const boundFn = cap.petersTeam.myBind(ironMan);
boundFn("Thor Bansal", "Rajneesh Kumar")


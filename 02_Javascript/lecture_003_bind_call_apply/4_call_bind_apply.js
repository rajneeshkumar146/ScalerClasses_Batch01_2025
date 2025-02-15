// why use case of bind , apply , call -> borrow features 
let cap = {
    name: "Steve",
    team: "Cap",

    petersTeam: function (mem1, mem2) {
        console.log(`Hey ${this.name} I am your neighborhood's  
        spiderman and I belong to ${this.team}'s team with members  ${mem1} and ${mem2}`);
    }
}

let ironMan = {
    name: "Tony",
    team: "Iron Man",
}

// Basic example.
// cap.petersTeam("Umang", "Manisha");
// ironMan.petersTeam("Umang", "Manisha");


/****
 * 
 * Call: borrow the method only once with defined number of param use petersTeam method -> only once 
 * **/
// cap.petersTeam.call(ironMan, "Umang", "Manisha");

/****
 * 
 * Apply: borrow the method only once with n no number of param 
 * **/
// let memberssArray = ["thor", "loki", "Rajneesh", "Manisha", "Suraj", "Priyank", "Umang"];
// let memberssArray = ["thor", "loki"];  // Max size of array allowed is 2 because of 2 argument.
// cap.petersTeam.apply(ironMan, memberssArray);

/*****
 * bind : making permanent copy of that method to use multiple times
 * ******/

const boundFn = cap.petersTeam.bind(ironMan);
console.log(boundFn)
// boundFn("Rajneesh", "War Machine");
// boundFn("Umang", "War Machine");

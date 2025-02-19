// This object  -> copy of it 
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }],
    sayHi: function () {
        console.log("Hi Class!");
    }
};

//N = 12,  T: O(N), Run time space: O(N)  to be precise: O(Height of recusrive stack or tree)
function superCloneEffective(input){
    // Base case or edge cases.
    if(!Array.isArray(input) && typeof input !== "object"){
        // Function or either primitive data type.
        return input;
    }

    // Create a new container on the basis of type whether it is a array or object.
    let clone = Array.isArray(input) ? [] : {};

    // Copy all the key and values.
    for(let key in input){
        const value  = input[key];
        clone[key] = superCloneEffective(value);
    }

    // return object after completion.
    return clone;
}

// Testcases.
let superDeeplyClonedObj = superCloneEffective(person);

superDeeplyClonedObj.lastName = "Odinson";
superDeeplyClonedObj.address.street = "south 1st street";

console.log("person", person);
console.log("superCopiedObject", superDeeplyClonedObj);

superDeeplyClonedObj.sayHi();





// let arr = [1, 2, 3, 4, [10, 12], 5, 6];

// // assigning arr to copiedArr
// let copiedArr = arr;   // copy the refrence, Shallow copy
// console.log(copiedArr);
// copiedArr[2] = 100;
// console.log("arr: ", arr, "copiedArr: ",copiedArr);

/***
 * array , object -> two types of values -> primitves(values) , non primitives(reference)
 * Assignment ->
 *  values ->  are not copied, only main address copied.
 *  reference -> they are also not copied, only main address copied.
*
* */

/*****
 * shallow copy: shallow copy of an object/Array is a copy whose properties share the same references
 * (point to the same underlying values) as those of the source object from which copied
 * object is formed
 * shallow copy :
 *  value -> values will be copied and they have diff mem
 * references -> new references will be created but the values inside the reference will be pointing towards same location
 * */

/**----------------------- spread --------------------------------------------*/
// let arr = [1, 2, 3, 4, [10, 12], 5, 6];
// let spreadArray = [...arr];  // Partial Deep copy. (Level 1 deep copy)
// spreadArray[2] = 100;
// spreadArray[4][1] = 200;
// console.log("outputs ", spreadArray, arr);

/**----------------------------------- Object.assign -----------------------------------**/
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
// };

// let veryShallowCopy = person;
// veryShallowCopy.firstName = "Tapaswini";
// console.log("person", person);
// console.log("copiedObject", veryShallowCopy);

// let copiedObject = Object.assign({}, person);   // Partial deep copy or Level 1 deep copy
// let copiedObject = { ...person };  // Partial deep copy or Level 1 deep copy


// console.log("Copied Object: ", copiedObject);

// copiedObject.lastName = "Odison";
// copiedObject.address.street = "South 1st Street";

// console.log("person: ", person);
// console.log("copiedObject: ", copiedObject);

/**
 * Deep Copy : JSON.stringify and JSON.parse
 *
 * */

let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
};

// Convert obj to string.
let stringSyntaxOfObject = JSON.stringify(person);
// console.log(typeof stringSyntaxOfObject)

/**deep copy -> object like string*/
let deepClonedObj = JSON.parse(stringSyntaxOfObject);
// console.log(typeof deepCloneObj)


deepClonedObj.lastName = "Odinson";
deepClonedObj.address.street = "south 1st street";

console.log("person", person);
console.log("copiedObject", deepClonedObj);





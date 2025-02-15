let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5, 6];

// Way 1: Old traditional way.
const sum = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    // console.log(sum);
    return sum;
}

// console.log("Sum of arr1: ", sum(arr1));
// console.log("Sum of arr2: ", sum(arr2));

// Way 2: Bad way.
// console.log("type of array is: ", typeof arr1);
// console.log(arr1);

// arr1.sum = function () {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//         sum = sum + this[i];
//     }
//     console.log(sum);
// }

// arr2.sum = function () {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//         sum = sum + this[i];
//     }
//     console.log(sum);
// }

// console.log(arr1);
// arr1.sum();
// arr2.sum();

/************* parent ************/
Array.prototype.sum = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum = sum + this[i];
    }
    console.log(sum);
}


// usecase of this and prototype
arr1.sum();
arr2.sum();
console.log(arr1);






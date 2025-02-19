// infinite curry 
// Problem 1: Counter
function counter(args) {
    let count = 0;
    count++;
    if (args === 0) {
        return count;
    } else {
        return function inner(args) {
            count++;
            if (args === 0) {
                return count;
            } else {
                return inner;
            }
        }
    }
}


// console.log(counter(0)); // print -> 1
// console.log(counter()(0)); // print -> 2
// console.log(counter()()()()(0)); // print -> 5



// Problem 1: Sum
function sum(val) {
    if (val === undefined) {
        return 0;
    } else {
        let res = val;
        return function smallerSumHelperMethod(val) {
            if (val === undefined) {
                return res;
            } else {
                res += val;
                return smallerSumHelperMethod;
            }
        }
    }
}

// console.log(sum())  // 0
// console.log(sum(1)());  // 1
// console.log(sum(3)(4)());  // 7
// console.log(sum(3)(7)(8)());  //18

/***************Private variables******/

// Bad code.
// function createEvenValueStack() {
//     return {
//         items: [],
//         push(item) {
//             if (item % 2 == 0) {
//                 console.log("Is pushed");
//                 this.items.push(item);
//             } else {
//                 console.log("Please input even value");
//             }
//         },
//         pop() {
//             return this.items.pop();
//         }
//     };
// }

// Good code.
function createEvenValueStack() {
    let items = [];
    return {
        push(item) {
            if (item % 2 == 0) {
                console.log("Is pushed");
                items.push(item);
            } else {
                console.log("Please input even value");
            }
        },
        pop() {
            return items.pop();
        }
    };
}

const stack = createEvenValueStack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(5);
console.log("pop ele: ", stack.pop());
console.log(stack.items);
stack.items = [10, 100, 1000]; // prevent this behaviour
console.log("pop ele: ", stack.pop());
stack.push(40);
stack.push(50);
stack.push(60);
console.log("pop ele: ", stack.pop());
console.log(stack.items);


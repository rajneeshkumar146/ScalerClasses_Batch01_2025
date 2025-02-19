// input  -> nested array
// let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 110]]];
// output -> single level of array with num 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 110];

// [4, 5] -> [4,5]
// [6, 7, 8, [9, 10, 11]] -> [6, 7, 8, 9, 10, 11]
// [] -> []

let input = [[[[[1]]]],2];

// Array contains only Integers. 
function flatten(srcArr) {
    let newArr = [];
    for (element of srcArr) {
        if (Array.isArray(element)) {
            let flatteredArrayUsingRecursion = flatten(element);
            // for(ele of flatteredArrayUsingRecursion){
            //     newArr.push(ele);
            // }

            newArr.push(...flatteredArrayUsingRecursion);
        } else {
            newArr.push(element);
        }
    }

    return newArr;
}

let flattenedArr = flatten(input);
console.log("flattenedArr: ", flattenedArr);
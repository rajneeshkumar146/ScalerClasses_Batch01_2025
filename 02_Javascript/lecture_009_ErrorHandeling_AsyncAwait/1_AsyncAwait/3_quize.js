function resolveAfterNSeconds(delay, x) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Value: " + x);
            resolve(x);
        }, delay);
    });
}

// (function () {
//     let a = resolveAfterNSeconds(1000, "data 1")
//     a.then(async function (x) {
//         // 1 sec


//         // It work in serial order.
//         let y = await resolveAfterNSeconds(2000, "data 2") // Total time spent: 1 + 2  = 3
//         let z = await resolveAfterNSeconds(1000, "data 3") // Total time spent: 1 + 2 + 1 = 4
//         // 4 sec

//         // They work in parallel.
//         let p = resolveAfterNSeconds(2000, "data 4"); 
//         let q = resolveAfterNSeconds(1000, "data 5");

//         console.log(x + y + z + await p + await q);  // Total time spent: 4 + max(2, 1) = 6 sec
//     })
// })();

(function () {
    let a = resolveAfterNSeconds(1000, "data 1")
    a.then(async function (x) {
        // 1 sec


        // It work in serial order.
        let y = await resolveAfterNSeconds(2000, "data 2") // Total time spent: 1 + 2  = 3
        let z = await resolveAfterNSeconds(1000, "data 3") // Total time spent: 1 + 2 + 1 = 4
        // 4 sec


        // They work in serial order
        let p = await resolveAfterNSeconds(2000, "data 4");  // Total time spent: 4 + 2 = 6s
        let q = await resolveAfterNSeconds(1000, "data 5");  // Total time spent: 6 + 1 = 7s

        console.log(x + y + z + p + q);  // Total time spent: 7s.
    })
})();
const fs = require("fs");
console.log("Before");

const promise = fs.promises.readFile("./f1.txt");

/***consumption of promise*/
// await only works inside a  function with async keyword

async function fn() {
    try {
        const data = await promise;
        console.log("Data inside the file is " + data);
        return fs.promises.readFile("./f2.txt")
    } catch (err) {
        console.log("Err: ", err);
    }
}

fn().then(function (data) {
    console.log("Data inside the file is " + data);
}).catch((err) => {
    console.log("Err: ", err);
})




console.log("After");
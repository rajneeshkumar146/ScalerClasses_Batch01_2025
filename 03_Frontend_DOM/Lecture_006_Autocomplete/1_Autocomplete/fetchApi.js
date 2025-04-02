/** Make HTTP request from browser -> It is an promise based API */


/**
 * Fetch API request.
 * Get request -> response object.
 * response = header(metadata) + body(actual data)
 * extract actual -> call promoise.JSON() and
 * this fn also promise based.
 */


// fetch('https://restcountries.com/v3.1/name/India')
//     .then(function (response) {
//         console.log("My response: ", response);
//         return response.json();
//     }).then((data) => {
//         console.log("My data: ", data);
//     }).catch((err) => {
//         console.log("There is an error: ", err);
//     });


// 404, 500 
async function getContries(keyword) {
    try {
        const rawResponse = await fetch(`https://restcountries.com/v3.1/name/${keyword}`);
        if (rawResponse.status === 404) {
            console.log("Page Not found!")
            return [];
        } else if (rawResponse.status === 500) {
            console.log("Internal server error!");
            return [];
        }

        console.log("Data Found!"); // It is a 200ok status
        return await rawResponse.json();
    } catch (err) {
        console.log("Err: ", err);
    }
}


// getContries("India").then(console.log).catch(console.log);

export default getContries;
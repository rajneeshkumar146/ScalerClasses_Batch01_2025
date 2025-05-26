// Import the module.
const express = require("express");


// Create an express application.
const app = express();
/** It is middleware for all post request which help to 
 * receive request body. which my server can undersatnd. 
 * */
app.use(express.json());

// Constants.
const PORT = 3000;
const HOST = "localhost";

// Define a route.
// Base URl: http://localhost:3000/
app.get("/", (req, res) => {
    res.send("Hello Server");
});

// Base URl: http://localhost:3000/home
app.get("/home", (req, res) => {
    res.send("This is home page.");
});

// Base URl: http://localhost:3000/about
// curl --request GET http://localhost:3000/about
app.get("/about", (req, res) => {
    res.send("This is about page.");
});

/** Query parameter, It start after '?', key=value */
// Base URL: http://localhost:3000/search?name=Rajneesh&age=26/
app.get('/search', (req, res) => {
    const queryParam = req.query;
    console.log("queryParam: ", queryParam);
    res.send(`Your parameter are ${JSON.stringify(queryParam)}`);
});

// Base URL:  http://localhost:3000/data
app.post("/data", (req, res) => {
    console.log("Request Recieved: ", req.body);
    console.log("Name: ", req.body.Name);
    res.send("This is post request.");
});

const users = [
    { id: 1, name: "Karan" },
    { id: 2, name: "Manisha" },
    { id: 3, name: "Kishna" },
];

// Base Url: http://localhost:3000/users
app.post("/users", (req, res) => {
    const newUser = req.body;

    //Operation.
    const userId = users.length + 1;
    newUser.id = userId;

    // Persist this information in your DB.
    users.push(newUser);

    // send the status code.
    res.status(200).json({ message: "User created sucessfully! ", user: newUser });
});

/** Any name starting from 't', 'T' and 'R' are now allowed to proccess payment, Apart from any other user
 * they are allowed store in the User DB.
*/

// Base Url: http://localhost:3000/payment
const userDb = [];
const notAllowList = ["t", "T", "R"];
app.post("/payment", (req, res) => {
    const paymentBody = req.body;
    let isNotValidUser = notAllowList.some(indetifier => paymentBody.user.startsWith(indetifier));

    if (isNotValidUser) {
        res.status(500).json({ Message: "Invalid User. Not allowed for payment." });
        return;
    }

    userDb.push(paymentBody.user);
    res.status(200).json({ Message: "Valid user for payment, User is saved" });

    // console.log("Print all user: ", userDb);
});

// Base Url: http://localhost:3000/users/1
app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    console.log("UserId: ", userId);

    // find the user with id.
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ Message: "User Not Found" });
    }


    users.splice(userIndex, 1);
    res.status(200).json({ Message: "User Deleted" });

    console.log("Print all user: ", users);
});


// MiddleWares
const loggerMiddleWare_logging = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}

const loggerMiddleware_validation = (req, res, next) => {
    console.log("Validation process begins: " + `[${new Date().toISOString()}] ${req.method} ${req.url}`);
    // res.send("Request is not Validated and don't call next middleware");  // some condition.
    next(); // call the next middleware.
}


// Base Url: http://localhost:3000/special
app.get("/special", loggerMiddleWare_logging, loggerMiddleware_validation, (req, res) => {
    res.status(200).send("Welcome to sepcial route");
});

// Not found
app.use((req,res) => {
    res.status(404).send("Page Not Found!!!");
});









// Sart a server.
app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});



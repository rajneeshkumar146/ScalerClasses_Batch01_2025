const http = require("http");

const PORT_NUMBER = 3000;
const HOST = "localhost";


const server = http.createServer((req,res) => {
    // res.setHeader("Content-Type", "text/plain");
    // res.write("Hello Class!!");

    // res.setHeader("Content-Type", "text/html");
    // res.write("<html><head><title>My First Node Server</title></head><body><h1>Welcome to my first Node Server</h1></body></html>")
    // res.write("<h2>My name is Node</h2>")
    // res.write("<h3>Nodeeee is super cool</h3>");

    res.setHeader("Content-Type", "text/json");
    const jsonData = {
        message: "Hello World",
        data: new Date()
    }

    const jsonResponse  = JSON.stringify(jsonData);
    res.write(jsonResponse);


    res.end();
});



server.listen(PORT_NUMBER, HOST, () => {
    console.log(`server is running on http://${HOST}:${PORT_NUMBER}`);
});




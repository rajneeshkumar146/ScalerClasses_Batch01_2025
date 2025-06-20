const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require("express-mongo-sanitize");

// Load env Variables.
require('dotenv').config();

// Constants
const PORT = 8082;
const HOST = "localhost";

// Setup
const app = express();
app.use(express.json()); // Middleware

// Data base connection.
const connectDb = require("./config/db");
connectDb(); // Stablish database connection.

// Use helmet for setting various HTTP headers for security
app.use(helmet());
// Custom Content Security Policy (CSP) configuration
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "example.com"], // Allow scripts from 'self' and example.com
            styleSrc: ["'self'", "'unsafe-inline'"], // Allow inline styles (unsafe)
            imgSrc: ["'self'", "data:", "example.com"], // Allow images from 'self', data URLs, and example.com
            connectSrc: ["'self'", "api.example.com"], // Allow connections to 'self' and api.example.com
            fontSrc: ["'self'", "fonts.gstatic.com"], // Allow fonts from 'self' and fonts.gstatic.com
            objectSrc: ["'none'"], // Disallow object, embed, and applet elements
            upgradeInsecureRequests: [], // Upgrade insecure requests to HTTPS
        },
    })
);

// RateLimiter middlerware.
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 Min.
    max: 100, // Limit each Ip to 100 requests per window.
    message: "To many request from this IP, Please try again  after 15 minutes."
});

// Apply rate limiter to all API routes.
app.use("/api/", apiLimiter);
// Sanitize user input to prevent MongoDB Operator Injection
app.use(mongoSanitize());


// Global Variables.
const USER_ROUTER = require("./routes/userRouter");
const MOVIE_ROUTER = require("./routes/movieRoute");
const THEATER_ROUTER = require("./routes/theatreRoute");
const SHOW_ROUTER = require("./routes/showRoute");
const BOOKING_ROUTER = require("./routes/bookingRoute");

// Routes.
app.use("/api/users", USER_ROUTER);
app.use("/api/movies", MOVIE_ROUTER);
app.use("/api/theatres", THEATER_ROUTER);
app.use("/api/shows", SHOW_ROUTER);
app.use("/api/bookings", BOOKING_ROUTER);



// Home Page.
app.get("/", (req, res) => {
    res.status(201).send("Welcome to the home page.")
});

// Not Found Page.
app.get((req, res) => {
    res.status(404).json({ message: "page not found" })
});



// Start the server.
app.listen(PORT, () => {
    console.log(`server is running on http://${HOST}:${PORT}`);
});

const express = require("express");

const auth = require('../middlewares/authMiddleware')
const {
    register,
    login,
    getCurrentUser
} = require('../controllers/userController');

const userRouter = express.Router();

const putReqBody = (req, res, next) => {
    req.body = {};
    next();
}


// POST.
// Path: localhost:8082/api/users/register
userRouter.post("/register", register);
userRouter.post("/login", login);

// GET
userRouter.get("/get-current-user", putReqBody, auth, getCurrentUser);  // Middleware Chaining.



// Function for otp generation.

/**
 * Math.random(): Generate a random floating-point number between 0(inclusive) and 1 (exclusive).
 * 
 * Math.random() * 9000000: Scales the random number to a range between 0 and 899999.
 * 
 * For 6 digit otp: 100000 +  Math.random() * 9000000: Scales the random number to a range between 100000 and 999999.
 * 
 * Math.floor(): round down to the nearest whole number.
 */

const otpGenerator = function () {
    let shiftingBy = 100000;
    let multiplier = 900000;
    return Math.floor(shiftingBy + Math.random() * multiplier);
}


userRouter.patch("/forgetpassword", async function (req, res) {
    try {

    } catch (err) {
        return res.status(500).json({ status: "failure", message: err.message });
    }

});

userRouter.patch("/resetpassword/:email", async function (req, res) {
    try {

    } catch (err) {
        return res.status(500).json({ status: "failure", message: err.message });
    }
});





module.exports = userRouter;

const express = require("express");
const EmailHelper = require("../utils/emailHelper");

const auth = require('../middlewares/authMiddleware')
const {
    register,
    login,
    getCurrentUser
} = require('../controllers/userController');


const userRouter = express.Router();
const User = require("../model/userModel");

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

const resetOtpFileds = (user) => {
    user.otp = undefined;
    user.otpExpiry = undefined;
}


userRouter.patch("/forgetpassword", async function (req, res) {
    /**
     * 1. You can ask for email.
     * 2. Check email is present or not.
     * 3. If email is not present -> send a response to the user (user not found).
     * 4. If email is present -> create otp -> send to the email.
     * 5. Also store the otp -> in the user model.
     */
    try {
        if (req.body.email === undefined) {
            return res.status(401).json({
                status: "failure",
                message: "Please entre the email for forget password."
            });
        }

        // find the user in db.
        let user = await User.findOne({ email: req.body.email });
        if (user === null) {
            return res.status(404).json({
                status: "failure",
                message: "User not found"
            });
        }

        // If we got the user.
        const otp = otpGenerator();
        user.otp = otp;
        user.otpExpiry = Date.now() + 10 * 60 * 1000;

        console.log("Otp sent to your email id: ", otp);

        // Those update will be send to the db.
        await user.save();

        res.status(200).json({
            status: "success",
            message: "Otp sent to your email id."
        });

        EmailHelper('otp.html', user.email, {
            name: user.name,
            otp: otp,
        });
    } catch (err) {
        return res.status(500).json({ status: "failure", message: err.message });
    }

});

userRouter.patch("/resetpassword/:email", async function (req, res) {
    /**
   * 1. otp is there, new password should be populated and We match the otp.
   * 2. email id should match.
   * 3. otp is not expired
   */
    try {
        let resetDetails = req.body;
        // Required fields should be there.
        if (!resetDetails.password || !resetDetails.otp) {
            return res.status(401).json({
                status: "failure",
                message: "Invalid request!"
            });
        }

        // Is person exist.
        let user = await User.findOne({ email: req.params.email });
        if (user === null) {
            return res.status(404).json({
                status: "failure",
                message: "User not found"
            });
        }

        if (user.otp != req.body.otp) {
            return res.status(404).json({
                status: "failure",
                message: "otp doesn't matched!"
            });
        }

        // is otp expired.
        if (Date.now() > user.otpExpiry) {
            resetOtpFileds(user);
            return res.status(401).json({
                status: "failure",
                message: "otp expired."
            });
        }

        user.password = req.body.password;

        // Reset the otp from the user.
        resetOtpFileds(user);

        await user.save();
        return res.status(200).json({
            status: "success",
            message: "Password reset successfully"
        });
    } catch (err) {
        return res.status(500).json({ status: "failure", message: err.message });
    }
});





module.exports = userRouter;

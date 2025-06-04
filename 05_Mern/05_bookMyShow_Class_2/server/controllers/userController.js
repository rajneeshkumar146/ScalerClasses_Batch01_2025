const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");


/**
 "name":"siri",
 "email":"siri@apple.com",
 "password":"steve",
 "role": "user"
 "isAdmin":false
 */

const getCurrentUser = async (req, res) => {
    try {
        const id =  req.body.userId;
        const user = await userModel.findById(id).select("-password");
        console.log("User Found with id: ", id, " User is: ", user);

        return res.status(200).send({
            success: true,
            data: user,
            message: "Your are authrized person to go on protected route!",
        });
    } catch (err) {
        return res.status(500).json({ message: "Error fetching user:", err });
    }

}

const login = async (req, res) => {
    try {
        // TODO(rajneesh): Remove this once done with development.
        console.log("Trying to login with cred: ", req.body);
        const user = await userModel.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User doesn't exist, Please Register",
            });
        }

        // Similified password validation.
        if (req.body.password !== user.password) {
            return res.status(401).send({
                success: false,
                message: "Sorry, Invalid Password entered! Please try again!",
            });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "10d"
        });

        // TODO(rajneesh): Remove this once done with development.
        console.log("\nPrinting token for debugging purpose, in user Controller:", token, "\n");
        console.log("Able to validate user, Login successfully.");

        return res.status(200).send({
            success: true,
            message: "You've successfully logged in!",
            data: token,
        });
    } catch (err) {
        console.log("Error encounterd at the login endpoint:", err)
        res.status(500).send({
            success: false,
            message: "An error occurred. Please try again later." + err,
        });
    }

}

const register = async (req, res) => {
    try {
        const isUserExist = await userModel.findOne({ email: req.body.email });
        // TODO(rajneesh): Remove this once done with development.
        console.log("During registration isUserExist: ", isUserExist);
        if (isUserExist) {
            return res.send({
                success: false,
                message: "User already resgistered."
            });
        }

        const newUser = await userModel.create(req.body);

        // TODO(rajneesh): Remove this once done with development.
        console.log("During registration successfully registered: ", req.body);
        return res.send({
            success: true,
            message: "Registraion successfuly. Please login."
        });

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = {
    register,
    login,
    getCurrentUser,
}
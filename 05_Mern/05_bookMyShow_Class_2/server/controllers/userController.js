const userModel = require("../model/userModel");


/**
 "name":"siri",
 "email":"siri@apple.com",
 "password":"steve",
 "role": "user"
 "isAdmin":false
 */

const getCurrentUser = async (req, res) => {

}

const login = async (req, res) => {

}

const register = async (req, res) => {
    try {
        const isUserExist = await userModel.findOne({ email: req.body.email });
        console.log("During registration isUserExist: ", isUserExist);
        if (isUserExist) {
            return res.send({
                success: false,
                message: "User already resgistered."
            });
        }

        const newUser = await userModel.create(req.body);

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
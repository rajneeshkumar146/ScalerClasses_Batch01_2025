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


        

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

}

module.exports = {
    register,
    login,
    getCurrentUser,
}
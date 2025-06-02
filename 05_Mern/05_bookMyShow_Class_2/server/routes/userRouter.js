const express = require("express");
const {
    register,
    login,
    getCurrentUser
} = require('../controllers/userController');

const userRouter = express.Router();


// POST.
// Path: localhost:8082/api/users/register
userRouter.post("/register", register);


module.exports = userRouter;

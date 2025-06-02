const { axiosInstance } = require(".");

export const LoginUser = async (value) => {
    try {
        //  TODO(rajneesh): Remove this console once project is ready for launch.
        console.log("Values I get at login axios instance: ", value);
        const response = await axiosInstance.post("api/users/login", value);
        return response.data;
    } catch (err) {
        console.log("Error occuered at client side in login endpoint:", err);
    }
}

export const RegisterUser = async (value) => {
    try {
        //  TODO(rajneesh): Remove this console once project is ready for launch.
        console.log("Values I get at register axios instance: ", value);
        const response = await axiosInstance.post("api/users/register", value);
        return response.data;
    } catch (err) {
        console.log("Error occuered at client side in register endpoint:", err);
    }
}


export const GetCurrentUser = async (value) => {
    try {
        // TODO(replace this id with correct id)
        const response = await axiosInstance.get("api/users/get-current-user/:id");
        return response.data;
    } catch (err) {
        console.log("Error occuered at client side in login endpoint:", err);
    }
}

export const ForgetPassword = async (value) => { }

export const ResetPassword = async (value, email) => { }
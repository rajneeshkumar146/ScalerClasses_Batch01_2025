const jwt = require("jsonwebtoken");


const auth = (req, res, next) => {
    try {
        console.log("Req Headers: ", req.headers.authorization);

        const token = req.headers.authorization.split(" ")[1];
        console.log("Token I received: ", token);


        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Verified Token: ", verifiedToken);

        // if (req.body === null || req.body === undefined) {
        //     req.body = { "userId": verifiedToken.userId };
        // } else {
        //     req.body.userId = verifiedToken.userId;
        // }

        req.body.userId = verifiedToken.userId;
        
        console.log("After verification userId is: ", req.body.userId);

        next();
    } catch (err) {
        res.status(401).json({ success: false, message: "Tokne Invalid!" })

    }
}

module.exports = auth;
const jwt = require('jsonwebtoken');
require('dotenv').config();
const asyncHandler = require('express-async-handler');

const validatetoken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: "Invalid Token or Token Expired!" });
            }
            console.log(decoded);
            req.user = decoded.user;
            next();
        });
    }

    if (!token) {
        res.status(401).json({ message: "Missing token !" });
    }
});

module.exports = validatetoken;
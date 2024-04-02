const Replicate = require("replicate");
require('dotenv').config();

//func
const replicate = new Replicate({
    auth: process.env.REPLICATE_API_KEY,
});

module.exports = replicate;
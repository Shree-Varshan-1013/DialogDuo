const Replicate = require("replicate");
require('dotenv').config();

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_KEY,
});

module.exports = replicate;
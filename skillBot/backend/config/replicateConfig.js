const Replicate = require("replicate");
require('dotenv').config();

const replicate = new Replicate({
    auth: "r8_BKNtsbMFJVy7iRYQtYAoWqLyauFVUF50eUM38",
    // auth: process.env.REPLICATE_API_KEY,
});

module.exports = replicate;
const mongoose = require('mongoose');
require('dotenv').config();

const mongoDBConfig = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ChatBot");
        console.log('MongoDB is connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongoDBConfig;
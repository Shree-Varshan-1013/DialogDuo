const mongoose = require('mongoose');
require('dotenv').config();

const mongoDBConfig = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('MongoDB is connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongoDBConfig;
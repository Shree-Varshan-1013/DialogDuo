const { Schema, model } = require('mongoose');

const userNewSchema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    confirmpassword: {
        type: String,
    },
},
    {
        timestamps: true,
    }
);

const User = model('User', userNewSchema );

module.exports = User;
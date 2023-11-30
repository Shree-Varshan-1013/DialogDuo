const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerUser = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { username, email, password, confirmpassword } = req.body;

    if (!username || !email || !password || !confirmpassword) {
        res.status(400).json({ message: 'Please fill all fields' });
    }

    const userAvail = await User.findOne({ email });
    if (userAvail) {
        res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    try {
        const user = new User({
            username,
            email,
            password: hashedPassword,
            confirmpassword: hashedPassword,
        });
        await user.save();
        res.status(201).json({ message: 'user created successfully' });
    }
    catch (err) {
        res.status(400).json({ message: 'User creation failed', err: `${err.message}` });
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email) {
        res.status(400).json({ message: 'Email is required' });
    }
    if (!password) {
        res.status(400).json({ message: 'Password is required' }); x
    }

    const user = await User.findOne({ email });
    console.log(user.password);
    console.log(password);
    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
            {
                user: {
                    email: user.email,
                },
            }
            , process.env.JWT_SECRET,
            {
                expiresIn: '1m',
            }
        );

        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token,
        });
    }
    else{
        res.status(400).json({ message: 'Bad Credentials !' });
    }
});

const getUser = asyncHandler(async (req, res) => {
    res.send("Welcome to the protected route");
});

const updateUser = asyncHandler(async (req, res) => {

});

const deleteUser = asyncHandler(async (req, res) => {
}
);

module.exports = { registerUser, loginUser, getUser, updateUser, deleteUser };
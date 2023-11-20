const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is required",
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
    },
    education: {
        type: String,
        required: "Education is required",
    },
    experience: {
        type: String,
        default: "No experience",
    },
    skills: {
        type: String,
        required: true,
    },
    projects: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
});


// resumeSchema.path('contact').validate(function validatePhone() {
//     return (this.phoneNr > 999999999);
// });

module.exports = mongoose.model('Resume', resumeSchema);
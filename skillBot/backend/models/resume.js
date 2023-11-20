const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    jobTitle: {
        type: String,
    },
    email: {
        type: String,
    },
    linkedIn: {
        type: String,
    },
    description: {
        type: String,
    },
    languages: {
        type: String,
    },
    school: {
        type: String,
    },
    schoolYear: {
        type: String,
    },
    collegeYear: {
        type: String,
    },
    college: {
        type: String,
    },
    experience: {
        type: String,
    },
    skills: {
        type: String,
    },
    projects: {
        type: String,
    },
    contact: {
        type: Number,
    },
    location: {
        type: String,
    },
});

module.exports = mongoose.model('Resume', resumeSchema);
const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is required",
    },
    jobTitle: {
        type: String,
        required: "Job Title is required",
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
    },
    linkedIn: {
        type: String,
        required: "LinkedIn is required",
    },
    description: {
        type: String,
        required: "Description is required",
    },
    languages: {
        type: String,
        required: "Languages are required",
    },
    school:{
        type: String,
        required: "School is required",
    },
    schoolYear:{
        type: String,
        required: "School Year is required",
    },
    collegeYear:{
        type: String,
        required: "College Year is required",
    },
    college:{
        type: String,
        required: "College is required",
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
    location: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Resume', resumeSchema);
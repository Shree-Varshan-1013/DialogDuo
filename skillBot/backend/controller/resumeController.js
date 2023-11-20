const pdf = require('html-pdf');
const Resume = require('../models/resume');
const resumeBuilder = async (req, res) => {
    try {
        const { name, email, phone, education, skills, experience, projects, achievements, interests } = req.body;
        const resume = new Resume({
            name,
            email,
            phone,
            education,
            skills,
            experience,
            projects,
            achievements,
            interests
        });
        await resume.save();
        res.send('Resume saved successfully');
    }
    catch (err) {
        console.log(`Error: ${err}`);
    }
}

module.exports = { resumeBuilder };
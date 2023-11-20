const pdf = require('html-pdf');
const Resume = require('../models/resume');
const path = require('path');
const pdfTemplate = require("../models/resumeTemplate/index");
const resumeBuilder = async (req, res) => {
    try {
        const { name, jobTitle, email, linkedIn, description, languages, school, schoolYear, college, collegeYear, experience, skills, projects, contact, location } = req.body;
        const resume = new Resume({
            name,
            jobTitle,
            email,
            linkedIn,
            description,
            languages,
            school,
            schoolYear,
            college,
            collegeYear,
            experience,
            skills,
            projects,
            contact,
            location,
        });
        await resume.save();
        res.send(req.body);
    }
    catch (err) {
        console.log(`Error: ${err}`);
    }
}

const getResume = async (req, res) => {
    try {
        const { email } = req.params;
        const response = await Resume.findOne({ "email": email });
        res.send(response);
    }
    catch (err) {
        console.log(`Unable to get resume ! ${err.message}`);
    }
}

const generatePDF = async (req, res) => {
    try{
        const options = {
            format: 'Letter', // Paper format: 'A4', 'Letter', etc.
            border: {
                top: '20mm', // Top margin
                right: '20mm', // Right margin
                bottom: '20mm', // Bottom margin
                left: '20mm' // Left margin
            },
            // Other options you want to set
        };

        pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
            if (err) {
                console.log(err);
                res.send(Promise.reject());
            } else res.send(Promise.resolve());
        });
    }
    catch(err){
        res.send(`Something went wrong...! ${err.message}`);
    }
}

const getGeneratePDF = async (req, res) => {
    const way = path.join(__dirname, '..', 'Resume.pdf');
    // const file = `${__dirname}/Resume.pdf`;
    const file = way;
    res.download(file);
}

module.exports = { resumeBuilder, getResume, generatePDF, getGeneratePDF };
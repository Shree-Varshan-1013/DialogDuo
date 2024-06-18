import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const ResumeForm = () => {

    const navigate = useNavigate();

    const initialState = {
        name: "",
        jobTitle: "",
        contact: "",
        email: "",
        description: "",
        linkedIn: "",
        languages: "",
        skills: "",
        school: "",
        schoolYear: "",
        college: "",
        collegeYear: "",
        experience: "",
        projects: "",
        location: "",
    };

    const [details, setDetails] = useState(initialState);

    const eventChange = (event) => {
        const { name, value } = event.target;
        setDetails((prevDetails) => {
            return {
                ...prevDetails,
                [name]: value,
            };
        });
    }

    const download = async (event) => {
        event.preventDefault();
        try {

            const pushData = await axios.post('http://localhost:2018/api/resume', details);
            console.log(pushData.data)
            const generatePdf = await axios.post('http://localhost:2018/api/resume/create-pdf', details);
            console.log(generatePdf.data)
            setTimeout(() => {
                let timerInterval;
                Swal.fire({
                    title: "Generating Resume !",
                    html: "Please wait for <b></b> milliseconds.",
                    timer: 5000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log("finished");
                    }
                });
                navigate('/resume/download');
            }, 5000)
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

    return (
        <div className='lg:ml-[400px]'>
            <h1 className='text-center text-4xl lg:mt-5 mt-[4rem] mb-4'>Details</h1>
            <div className='mt-15 ml-3 lg:ml-20 lg:mt-10'>
                <form className='grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10'>
                    <div className='form--group'>
                        <input className='px-3 py-2 border lg:px-20 lg:py-4 rounded-lg' type="text" id="name" name="name" placeholder="Name" value={details.name} onChange={eventChange} />
                    </div> 
                    <div className='form--group'>
                        <input className='px-3 py-2 border lg:px-10 lg:py-4 rounded-lg' type="text" id="jobTitle" name="jobTitle" placeholder="Job Title" value={details.jobTitle} onChange={eventChange} />
                    </div>
                    <div className='form--group'>
                        <input className='px-3 py-2 border lg:px-10 lg:py-4 rounded-lg' style={{ outline: "none", '-webkit-appearance': 'textfield' }} type="number" name="contact" id="contact" placeholder='Phone number' value={details.contact} onChange={eventChange} />
                    </div>
                    <div className='form--group'>
                        <input className='px-3 py-2 border lg:px-10 lg:py-4 rounded-lg' type="text" name="email" id="email" placeholder='Email' value={details.email} onChange={eventChange} />
                    </div>
                    <div className='form--group'>
                        <input className='px-3 py-2 border lg:px-10 lg:py-4 rounded-lg' type="text" name="description" id="description" placeholder='Description' value={details.description} onChange={eventChange} />
                    </div>
                    <div className='form--group'>
                        <input className='px-3 py-2 border lg:px-10 lg:py-4 rounded-lg' type="text" name="linkedIn" id="linkedIn" placeholder='Linkedin' value={details.linkedIn} onChange={eventChange} />
                    </div>
                    <div className='form--group'>
                        <input className='px-3 py-2 border lg:px-10 lg:py-4 rounded-lg' type="text" name="languages" id="languages" placeholder='Languages Known' value={details.languages} onChange={eventChange} />
                    </div>
                    <div className='form--group'>
                        <input className='px-3 py-2 border lg:px-10 lg:py-4 rounded-lg' type="text" name="skills" id="skills" placeholder='Skills Known' value={details.skills} onChange={eventChange} />
                    </div>
                    <div className='form--group'>
                        <input className='px-3 py-2 border lg:px-10 lg:py-4 rounded-lg' type="text" name="school" id="school" placeholder='School Name' value={details.school} onChange={eventChange} />
                    </div>
                    <div className='form--group'>
                        <input className='px-3 py-2 border lg:px-10 lg:py-4 rounded-lg' type="text" name="schoolYear" id="schoolYear" placeholder='School Years' value={details.schoolYear} onChange={eventChange} />
                    </div>
                    <div className='form--group'>
                        <input className='px-3 py-2 border lg:px-10 lg:py-4 rounded-lg' type="text" name="college" id="college" placeholder='College Name' value={details.college} onChange={eventChange} />
                    </div>
                    <div className='form--group'>
                        <input className='px-3 py-2 border lg:px-10 lg:py-4 rounded-lg' type="text" name="collegeYear" id="collegeYear" placeholder='College Years' value={details.collegeYear} onChange={eventChange} />
                    </div>
                    <div className='form--group'>
                        <input className='px-3 py-2 border lg:px-10 lg:py-4 rounded-lg' type="text" name="experience" id="experience" placeholder='Experience' value={details.experience} onChange={eventChange} />
                    </div>
                    <div className='form--group'>
                        <input className='px-3 py-2 border lg:px-10 lg:py-4 rounded-lg' type="text" name="projects" id="projects" placeholder='Projects' value={details.projects} onChange={eventChange} />
                    </div>
                    <div className='form--group'>
                        <input className='px-3 py-2 border lg:px-10 lg:py-4 rounded-lg' type="text" name="location" id="location" placeholder='location' value={details.location} onChange={eventChange} />
                    </div>
                </form>
                <div className='flex justify-center mt-4 mb-4'>
                    <a onClick={download} class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                        <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span class="relative z-20 flex items-center text-sm">
                            <svg class="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            Generate
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ResumeForm

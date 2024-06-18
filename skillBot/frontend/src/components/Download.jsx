import React from 'react'
import axios from 'axios';
import CoolMode from "../magicui/cool-mode";
import '../styles/Download.css';

const Download = () => {

    const downloadFile = async () => {
        const response = await fetch('http://localhost:2018/api/resume/fetch-pdf');
        const blob = await response.blob();

        // Create a temporary URL to the blob
        const url = window.URL.createObjectURL(new Blob([blob]));

        // Create a link element
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Resume.pdf'); // Set the filename for download
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Clean up
        link.parentNode.removeChild(link);
    }

    return (
        <>
            <div class="centered-container select-none">
                <h1 className='text-4xl lg:text-7xl md:text-5xl mb-5'>Your Resume is ready !!</h1>
                <div className="relative justify-center">
                    <CoolMode>
                        <a onClick={downloadFile} class="cursor-pointer relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                            <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                            <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                            <span class="relative text-white text-xl">Download</span>
                        </a>
                    </CoolMode>
                </div>
            </div>
        </>
    )
}

export default Download
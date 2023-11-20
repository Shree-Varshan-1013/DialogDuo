import React from 'react'
import axios from 'axios';
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
            <div class="centered-container">
                <h1 style={{ marginBottom: "40px" }}>Your Resume is ready !!</h1>
                <button className='button-54' style={{ width: "40%", height: "20%" }} onClick={downloadFile}>Download</button>
            </div>
        </>
    )
}

export default Download
import React from 'react'
import '../styles/ResumeForm.css'

const ResumeForm = () => {
  return (
    <div className='resume'>
        <div className="heading">
            <h1>Skillbot Resume Builder</h1>
            </div>     
            <div className="details">
                <div className="enterdetails">
                    <h2>Enter Your Details</h2>
                </div>
                <div className="formdetails">
                    <form action="">
                        <div className="columns">
                        <div className="column1">
                    <input type="text" id="name" name="name" placeholder="Name"/>
                    <br />
                    <br />
                    <input type="text" name="phone" id="phone" placeholder='Phone number' />
                    <br />
                    <br />
                    <input type="text" name="description" id="description" placeholder='Description' /> 
                    <br />
                    <br />
                    <input type="text" name="langsknown" id="langsknown" placeholder='Languages Known' />        
                    <br />
                    <br />
                    <input type="text" name="school" id="school" placeholder='School Name' />
                    <br />
                    <br />
                    <input type="text" name="college" id="college" placeholder='College Name' />
                    <br />
                    <br />
                    <input type="text" name="experience" id="experience" placeholder='Experience' />
                    <br />
                    <br />
                    <input type="text" name="location" id="location" placeholder='Location' />
                    <br />
                    <br />


                        </div>
                        <div className="column2">
                    <input type="text" id="jobTitle" name="jobTitle" placeholder="Job Title"/>
                    <br />
                    <br />
                    <input type="text" name="email" id="email" placeholder='Email' />
                    <br />
                    <br />
                    <input type="text" name="linkedin" id="linkedin" placeholder='Linkedin' />
                    <br />
                    <br />
                    <input type="text" name="skillsknown" id="skillsknown" placeholder='Skills Known' />
                    <br />
                    <br />
                    <input type="text" name="schoolYear" id="schoolYear" placeholder='School Years' />
                    <br />
                    <br />
                    <input type="text" name="collegeYear" id="collegeYear" placeholder='College Years' />
                    <br />
                    <br />
                    <input type="text" name="projects" id="projects" placeholder='Projects' />
                    <br />
                    <br />
                    <button type='submit' className='formbutton'>Submit</button>
                        </div>
                                   </div>
                    
                    </form>
                </div>
            </div>

    </div>
  )
}

export default ResumeForm

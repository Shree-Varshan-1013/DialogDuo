import React from 'react'
import "../styles/Signin.css"


const Signin = () => {
  return (
    <div className='signin'>
                <div className="signin-card">
                    <div className="signin-cardtext">
                        <h1>Sign In</h1>
                        <br />
                        <input type="text" id="username" name="username" placeholder="Username"  />
                        <br />
                        <br />
                        <input type="password" id="password" name="password" placeholder="Password"  />
                        <br />
                        <br />
                        <div className='signin-buttons'>
                        <button className='button-5' onClick={() => navigate('/chatbot')}>SIGN IN</button>
                        <button className='button-5' onClick={() => navigate('/chatbot')}>SIGN UP</button>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Signin
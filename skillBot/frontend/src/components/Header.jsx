import React from 'react'

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img src="/img/logo.png" className='w-full lg:w-1/4 md:w-1/2' alt="Logo" onClick={() => navigate('/')} style={{ cursor: "pointer" }} />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Resume</a></li>
                        <li><a>Chatbot</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
import React from 'react'
import ChatBot from './ChatBot'
import Profile from './Profile'
import ResumeForm from './ResumeForm';

const Layout = ({ link }) => {

    const data = [
        {
            name: "Home",
            component: <ChatBot/>
        },
        {
            name: "Profile",
            component: <Profile/>
        },
        {
            name: "Resume",
            component: <ResumeForm />
        }
    ]

    const child = data.find(item => item.name === link);

    return (
        <div className='lg:ml-65'>
            {child.component}
        </div>
    )
}

export default Layout
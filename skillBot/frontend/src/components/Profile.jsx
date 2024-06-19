import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {

  const { userDetails } = useSelector(state => state.global);

  return (
    <div className='lg:ml-[550px] lg:mt-10 ml-[30px] mt-28'>
      <h1 className='text-4xl text-center mb-10'>Profile</h1>
      <div className='grid grid-cols-2 gap-6 text-xl p-6 border shadow-xl'>
        <div className=''>
          <h2>Username</h2>
        </div>
        <div>
          <h2>{userDetails.username}</h2>
        </div>
        <div>
          <h2>Email</h2>
        </div>
        <div>
          <h2>{userDetails.email}</h2>
        </div>
      </div>
    </div>
  )
}

export default Profile
import React from 'react'
import UserForm from '../Components/UserDetailsForm/UserForm'
import NavBar from '../Components/Nav-bar/NavBar'

function DetailsFormPage() {
  return (
    <>
    <NavBar></NavBar>
    <div className='vh-100  bg-lg-transparent d-flex justify-content-center align-items-center'>
      <UserForm></UserForm>
    </div>
    </>
  )
}

export default DetailsFormPage

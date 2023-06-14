import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import firebase from '../../Config/FirebaseConfig';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Footer() {
  const {currentUser} = useSelector( state=>state.authData )
  const navigate = useNavigate()
  return (
    <div className='mt-1 bg-white '>
        {currentUser && <div className='d-flex justify-content-center py-3'>
        <button className=' btn fw-bold text-white  ' style={{backgroundColor:'#AED6F1'}} onClick={() =>{
                    firebase.auth().signOut();
                    navigate('/')
            }}>Logout</button>
        </div>}
      <div className='w-100 bg-light py-2 d-flex align-items-center  justify-content-center '> 
        <Icon.CCircle></Icon.CCircle>
        <a href="https://arjunvijay.online/" className='text-decoration-none ms-2' target="_blank" >Arjun Vijay - 2023</a>
       </div>
    </div>
  )
}

export default Footer

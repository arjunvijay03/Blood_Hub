import React from 'react'
import Login from '../Components/Login/Login'
import Loading from '../Components/Loading/Loading'
import { useSelector } from 'react-redux'

function LoginPage() {
  const { loading } = useSelector( state => state.search) 
  return (
    <div className='w-100 d-flex justify-content-center align-items-center ' style={{height:'100dvh'}} >
        <Login></Login>
       {loading && <Loading></Loading>}
    </div>
  )
}

export default LoginPage

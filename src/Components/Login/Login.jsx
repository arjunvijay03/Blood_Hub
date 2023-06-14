import React, { useEffect, useRef } from 'react'
import Lottie from "lottie-react";
import animation from '../../assets/2087-blood-transfusion-kawaii.json'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  firebase from '../../Config/FirebaseConfig';
import {  getAuth, GoogleAuthProvider,getRedirectResult } from 'firebase/auth'
import { clearRegData, handleEmailChange, handlePasswordChange } from '../../Redux/AuthReducer';
import { setLoading } from '../../Redux/SearchReducer';
import googleLogo from '../../assets/google-logo.png'
function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = getAuth(firebase);
  const provider = new GoogleAuthProvider()
  const { email, password} = useSelector(state => state.authData)
  const { loading } = useSelector(state => state.search)
  const reff = useRef()
  useEffect(() => {
    // FETCH REDIRECT RESULT
    const handleRedirectResult = () => {
      dispatch(setLoading(true))

      getRedirectResult(auth)
        .then((result) => {
          // Handle the redirected result
          if (result.user) {
            if (result.user.metadata?.lastSignInTime === result.user.metadata?.creationTime) {
              firebase.firestore().collection('users').doc(result.user.uid).set({
                id:result.user.uid,
                
              }).then(()=>{
        
                navigate('/details_form')
                 dispatch(clearRegData())
                 dispatch(setLoading(false))
        
              })
            }else{
              
            navigate('/');
            dispatch(setLoading(false))

            }
            
            
          } else {
            dispatch(setLoading(false))
          }
        })
        .catch((error) => {
          dispatch(setLoading(false))

        });
    };

    handleRedirectResult();
  }, []);

// HANDLE LOGIN WITH EMAIL AND PASS
  const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(setLoading(true))

    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      navigate('/')
      dispatch(setLoading(false))
      dispatch(clearRegData())

    }).catch((error)=>{
      alert(error)
      dispatch(setLoading(false))

    })

  }

// HANDLE LOGIN WITH GOOGLE
  const handleSignInWithGoogle = () => {
    dispatch(setLoading(true))

   firebase.auth().signInWithRedirect( provider)
      .catch((error) => {
        alert(error)
        dispatch(setLoading(false))

      });
  };




  return (
    <div className=' w-100 shadow w-lg-50 w-md-75 p  h-auto   rounded row '>
      <div  className="col-12 col-md-5 bg-white p-2 py-3 d-flex flex-column gap-2 justify-content-center align-items-center border-end">
        <div className='w-25'>
          <Lottie animationData={animation} loop={true} />
          </div>  
          <p ref={reff} className='w-75 w-lg-100 text-center' style={{fontFamily:'monospace'}}>"A drop for you, an ocean for someone else"</p>
      </div>
      <div className="col-12 col-md-7 p-3 py-3" style={{backgroundColor:'#FFEBEB'}}>
          {/* <h4 className=' mb-0 h2'>Login</h4> */}
          <h4 className='mt-3 ms-4 h2'>Login</h4>
          <form action="" onSubmit={handleSubmit} className='mt-5 d-flex flex-column justify-content-center    '>
          
          <div className="mb-3">
           
            <input type="email" onChange={(event)=>dispatch(handleEmailChange(event.target.value))} className="form-control" required  placeholder="Email"/>
          </div>
          <div className="mb-3">
            
            <input type="password" onChange={event=>dispatch(handlePasswordChange(event.target.value))} minLength={6} required className="form-control"  placeholder='Password'/>
          </div>
          {/* <p className='ms-2 text-danger'>*pass</p> */}
          <button  className="btn w-100 mx-auto text-white bolder h3" style={{backgroundColor:'#B3E6CC'}} type="submit">Signup</button>
          <div className='d-flex justify-content-center gap-5 mt-3 '>
            <div onClick={handleSignInWithGoogle} className="btn bg-white  d-flex gap-3 pe-3 align-items-center">
              <img width={30} src={googleLogo} alt="" />
              Google
            </div>
            <div className="btn bg-white  d-flex gap-3 pe-3 align-items-center d-none">
            <img width={25} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />

              FaceBook
              </div>
          </div>
          <Link className='mt-3 text-center text-decoration-none text-black' to={'/signup'}>Don't have an account?</Link>
          </form>

        
      </div>
    </div>
  )
}

export default Login

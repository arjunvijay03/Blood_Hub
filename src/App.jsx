import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import SignupPage from './Pages/SignupPage'
import LoginPage from './Pages/LoginPage'
import SearchPage from './Pages/SearchPage'
import DetailsFormPage from './Pages/DetailsFormPage'
import firebase from './Config/FirebaseConfig'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from './Redux/AuthReducer'
import Loading from './Components/Loading/Loading'
import { setLoading } from './Redux/SearchReducer'


function App() {
  const { loading} = useSelector(state => state.search)
  const dispatch = useDispatch()
  const { currentUser} = useSelector(state => state.authData)
  useEffect(()=>{
    dispatch(setLoading(true))
    firebase.auth().onAuthStateChanged((user)=>{
      dispatch(setCurrentUser(user))
      dispatch(setLoading(false))
    })
  },[])
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element ={<HomePage/>}/>
        <Route  path='/signup' element ={<SignupPage/>}/>
        <Route  path='/login' element ={<LoginPage/>}/>
        <Route  path='/search' element ={<SearchPage/>}/>
        <Route  path='/details_form' element ={<DetailsFormPage/>}/>
        
      </Routes>
    </Router>
     { loading && <Loading></Loading>}
    </>
  )
}

export default App

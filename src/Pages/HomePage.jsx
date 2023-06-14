import React, { useEffect } from 'react'
import NavBar from '../Components/Nav-bar/NavBar'
import DonorCard from '../Components/DonorDetailsCard/DonorCard'
import SearchForm from '../Components/DonorSearchForm/SearchForm'
import firebase from '../Config/FirebaseConfig'
import { useSelector } from 'react-redux'
import Loading from '../Components/Loading/Loading'
import { useNavigate } from 'react-router-dom'
import NotMatch from '../Components/NotMatch/NotMatch'
import Footer from '../Components/Footer/Footer'
function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { donorsList, loading, notMatch } = useSelector(state => state.search)
  const { currentUser } = useSelector(state => state.authData)
  const navigate = useNavigate()
  return (
    <>
      <NavBar></NavBar>
      <div className='d-flex justify-content-center'>
        <div className='w-25 bg-white d-none d-lg-block position-fixed py-3 ms-2 start-0  border rounded'style={{top:'8rem'}}>
          <SearchForm></SearchForm>
        </div>

      
        <div className='px-lg-3 d-flex  flex-column w-100 w-lg-50 ms-lg-5 bg-white' style={{marginTop:'70px',minHeight:'calc(100dvh - 70px)'}}>
          { (notMatch && donorsList?.length === 0) &&
            <div className='w-100 d-none d-lg-flex h-100  justify-content-center align-items-center'>
                <span className='text-center fs-3'>Sorry we couldn't find you any match</span>
            </div>
          
          }
          {donorsList?.length === 0 ? <NotMatch></NotMatch>
               : donorsList?.map((data,index)=>{
         if(currentUser?.uid === data.id)return;
         return <DonorCard data={data} key={index}></DonorCard>}) 
          }
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default HomePage

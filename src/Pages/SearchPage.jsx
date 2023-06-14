import React, { useEffect } from 'react'
import SearchForm from '../Components/DonorSearchForm/SearchForm'
import NavBar from '../Components/Nav-bar/NavBar'

function SearchPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='bg-white vh-100'>
        <NavBar></NavBar>
        <div className='mt-5 pt-5'>
           <SearchForm></SearchForm>
        </div>
    </div>
  )
}

export default SearchPage

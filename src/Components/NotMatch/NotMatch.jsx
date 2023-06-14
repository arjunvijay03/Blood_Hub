import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function NotMatch() {
  const { notMatch } = useSelector(state=>state.search)
  const { currentUser } = useSelector(state=>state.authData)
  const navigate = useNavigate()
  return (
    <div className='h-100 w100 d-lg-none d-flex justify-content-center align-items-center'>
              <div className='d-flex flex-column align-items-center fs-1' ><span className='text-center'>{notMatch?`Sorry we couldn't find you any match`:'Search for donor'}</span>
              <div className='d-flex gap-2 mt-3'>

               <button style={{backgroundColor: 'rgb(204, 255, 204)'}} className='btn btn-secondary border-0 text-dark' onClick={()=>navigate('/search')}>Search</button>
               {!currentUser && <button className='btn bg-info' onClick={()=>navigate('/login')}>Login</button>}
              </div>
              </div>
          </div>
  )
}

export default NotMatch

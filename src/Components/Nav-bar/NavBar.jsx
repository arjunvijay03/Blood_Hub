import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import { useNavigate, useNavigation } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'

function NavBar() {
  const blood = ['A','A+','B','B+', 'O','O+','AB', 'AB+']
  const navigate = useNavigate()
  const { currentUser } = useSelector(state=>state.authData)

  return (
    <div className='w-100 p-3 py-3 text-white d-flex justify-content-between align-items-center position-fixed top-0' style={{backgroundColor:'#FF9999'}}>
      <div className='h2 d-flex align-items-center m-0 user-select-none' role="button" onClick={()=>navigate('/')}>
        Blood Hub
      </div>
       <div className='d-flex align-items-center gap-3 '>
          <Icon.Search size={25} onClick={()=>navigate('/search')} className=' d-lg-none'></Icon.Search>
          
        { currentUser ? <div className='rounded-circle bg-light d-flex justify-content-center align-items-center text-dark fw-bold fs-2 text-capitalize' style={{width:'40px', height:'40px', }}>{currentUser?.displayName?.charAt(0)}</div> :  <div className="btn bg-white" onClick={()=>{
            navigate('/login')
          }}>login</div>}
       </div>
     
    </div>
  )
}

export default NavBar

import React from 'react'
import{stateDatas} from '../../assets/StateData'
import { useDispatch, useSelector } from 'react-redux'
import { changeBloodType, changeDistrictName, changeStateName, setDonorsList, setLoading, setNotMatch } from '../../Redux/SearchReducer'
import firebase from '../../Config/FirebaseConfig'
import { useNavigate } from 'react-router-dom'
function SearchForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { districtName, stateName, bloodType, donorsList, loading} = useSelector(state=>state.search)
    const fetchDonors = (event)=>{
      event.preventDefault()
      dispatch(setLoading(true))
      dispatch(setDonorsList([]))
      // SEARCH WITH DISTRICT NAME
      if(districtName){

        firebase.firestore().collection(bloodType).doc(stateName).get().then(res=>{
          if(res.data()[districtName]){
            dispatch(setDonorsList(res.data()[districtName]))
          }else{
            dispatch(setNotMatch(true))
          }
          navigate('/')
          dispatch(setLoading(false))
        }).catch((err)=>{
          alert(err)
          dispatch(setLoading(false))
          dispatch(setNotMatch(true))
          navigate('/')
          dispatch(setLoading(false))
          
        })
      }
      // SEARCH WITHOUT DISTRICT NAME
      else{
        firebase.firestore().collection(bloodType).doc(stateName).get().then(res=>{
          let response = []
          Object.entries(res.data()).map((element)=>response=[...response, ...element[1]])
          dispatch(setNotMatch(true))
          dispatch(setDonorsList(response))
          navigate('/')
          dispatch(setLoading(false))
        }).catch(err=>{
          alert(err)
          dispatch(setLoading(false))
          dispatch(setNotMatch(true))
          navigate('/')
        })
      }
      

    }
    return (
    <div className='w-100 '>
      <h4 className='text-center text-secondary'>Search</h4>
      <form action="" onSubmit={(event) =>fetchDonors(event)} className='d-flex flex-column align-items-center gap-3'>
        <select onChange={(event)=>dispatch(changeBloodType(event.target.value))} required className="form-select w-75" aria-label="Default select example">
            <option value={""} >Select blood Group</option>
            <option value="A">A</option>
            <option value="A+">A+</option>
            <option value="AB">AB</option>
            <option value="AB+">AB+</option>
            <option value="B">B</option>
            <option value="B+">B+</option>
            <option value="O">O</option>
            <option value="O+">O+</option>
        </select>
        <select required onChange={(event)=>dispatch(changeStateName(event.target.value))} className="form-select w-75" aria-label="Default select example" >
            <option value={''} >Select State</option>
            {
                Object.entries(stateDatas).map(key=> <option key={key} value={key[0]} >{key[0]}</option>)
            }
            
        </select>
        <select className="form-select w-75" onChange={(event)=>dispatch(changeDistrictName(event.target.value))} aria-label="Default select example" disabled = {stateName?false:true} >
            <option value={''} >Select District (optional)</option>
            {
                stateDatas[stateName]?.map(element=><option key={element} value={element}>{element}</option>)
            }
            
        </select>
        <button className="btn w-75" style={{backgroundColor: 'rgb(204, 255, 204)'}}>search</button>
      </form>
    </div>
  )
}

export default SearchForm

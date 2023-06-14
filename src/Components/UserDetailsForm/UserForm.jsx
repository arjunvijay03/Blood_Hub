import React, { useEffect, useRef, useState } from 'react'
import { stateDatas } from '../../assets/StateData'
import { useDispatch, useSelector } from 'react-redux'
import firebase from '../../Config/FirebaseConfig'
import { arrayUnion } from "firebase/firestore";
import { clearRegData, handleAltPhoneChange, handleBloodTypeChange, handleCheckBoxChange, handleDistrictChange, handleNameChange, handlePhoneChange, handleStateNameChange, handleWhatsappNumberChange } from '../../Redux/AuthReducer'
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../Redux/SearchReducer';
function UserForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const inputRef = useRef()
  const { name, districtName, bloodType, stateName, phoneNumber,currentUser, altPhonenumber, whatsAppNumber} = useSelector(state => state.authData)
  useEffect(()=>{
    dispatch(setLoading(false))

  }, [])
  const handleSubmit = (event)=>{
    
    event.preventDefault()
    dispatch(setLoading(true))


    firebase.firestore().collection('users').doc(currentUser.uid).update({
      name,
      bloodType,
      phoneNumber,
      altPhonenumber,
      whatsAppNumber,
      stateName,
      districtName
    })


    firebase.firestore().collection(bloodType).doc(stateName).update({
        [districtName]:arrayUnion({
          id:currentUser.uid,
          name,
          bloodType,
          phoneNumber,
          altPhonenumber,
          whatsAppNumber,
          stateName,
          districtName
        })
    }).then(()=>{
      navigate('/')
      dispatch(setLoading(false))

    }).catch(err=>{
      alert(err)
      dispatch(setLoading(false))

    })
    dispatch(clearRegData())

   
  }
  return (
    <div className='w-lg-50 w-md-75 w-100 bg-white d-flex flex-column p-3 rounded' >
      <h4 className='text-center'>Personal details</h4>

      <form action="" onSubmit={handleSubmit} className='d-flex flex-column align-items-center gap-3'>
      <div className="mt-1 w-75 ">
              
              <input type="text" onChange={event=>dispatch(handleNameChange(event.target.value))} className="form-control " required  placeholder="Name"/>
            </div>
        <select required className="form-select w-75" onChange={event=>dispatch(handleBloodTypeChange(event.target.value))} aria-label="Default select example">
            <option value={''} >Select your blood Group</option>
            <option value="A">A</option>
            <option value="A+">A+</option>
            <option value="AB">AB</option>
            <option value="AB+">AB+</option>
            <option value="B">B</option>
            <option value="B+">B+</option>
            <option value="O">O</option>
            <option value="O+">O+</option>
        </select>
        <select required className="form-select w-75" onChange={(event)=>dispatch(handleStateNameChange(event.target.value))} aria-label="Default select example" >
            <option value={''} >Select State</option>
            {
                Object.entries(stateDatas).map(key=> <option key={key}  >{key[0]}</option>)
            }
            
        </select>
        <select required   className="form-select w-75" aria-label="Default select example" onChange={event=>dispatch(handleDistrictChange(event.target.value))} disabled = {stateName?false:true} >
            <option value={''}>Select District</option>
            {
                stateDatas[stateName]?.map(element=><option key={element}>{element}</option>)
            }
            
        </select>

        
        <div className="mb-3 w-75">  
            <input type="text" onChange={(event=>{
              if(/[a-z]/gi.test(event.target.value))return;
              dispatch(handlePhoneChange(event.target.value))
              dispatch(handleCheckBoxChange(inputRef.current.checked))
            })} minLength={10} required className="form-control border " value={phoneNumber}  placeholder='Phone number'/>
        </div>
        <div className="mb-3 w-75">  
            <input type="text" onChange={(event=>{
              if(/[a-z]/gi.test(event.target.value))return;
              dispatch(handleAltPhoneChange(event
                .target.value))
            })} minLength={10} value={altPhonenumber}  className="form-control border "  placeholder='Alternative number'/>
        </div>
        <div className="mb-3 w-75">  
            <input type="text" onChange={(event)=>{
              if(/[a-z]/gi.test(event.target.value))return;
              dispatch(handleWhatsappNumberChange(event.target.value))
            }} minLength={10} value={whatsAppNumber} required  className="form-control border "  placeholder='Whatsapp number'/>
            <div cn="form-check mt-2 ">
              <input ref={inputRef} className="form-check-input ms-2" onChange={event=>dispatch(handleCheckBoxChange(event.target.checked))} type="checkbox" value="" id="flexCheckChecked" />
              <label className="form-check-label ms-2" htmlFor="flexCheckChecked">
                Use primary number
              </label>
            </div>
        </div>




        <button className="btn w-75 " style={{backgroundColor: 'rgb(204, 255, 204)'}}>Save</button>
      </form>
    </div>
  )
}

export default UserForm

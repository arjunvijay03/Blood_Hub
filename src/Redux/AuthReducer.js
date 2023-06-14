import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
    email:'',
    name:'',
    password:'',
    phoneNumber:'',
    altPhonenumber:'',
    whatsAppNumber:'',
    bloodType:'',
    stateName:'',
    districtName:'',
    currentUser:null,

}

const authSlice = createSlice({
    name:'authData',
    initialState:INITIAL_STATE,
    reducers:{
        handleEmailChange:(state, action)=>{
            state.email = action.payload
        },
        handlePasswordChange:(state, action)=>{
            state.password = action.payload
        },
        handleNameChange:(state, action)=>{
            state.name = action.payload
        },
        handlePhoneChange:(state, action)=>{
            state.phoneNumber = action.payload
        },
        handleAltPhoneChange:(state, action)=>{
            state.altPhonenumber = action.payload
        },
        handleWhatsappNumberChange:(state, action)=>{
            state.whatsAppNumber = action.payload
        },
        handleBloodTypeChange:(state, action)=>{
            state.bloodType = action.payload
        },
        handleStateNameChange:(state, action)=>{
            state.stateName = action.payload
        },
        handleDistrictChange:(state, action)=>{
            state.districtName = action.payload
        },
        handleCheckBoxChange:(state, action) =>{
            if(action.payload === true){
                state.whatsAppNumber = state. phoneNumber
            }else(state.whatsAppNumber = '')
        },
        clearRegData:(state)=>{
            state.email = ''
            state.password = ''
            state.altPhonenumber = ''
            state.bloodType = ''
            state.districtName = ''
            state.name = ''
            state.phoneNumber = ''
            state.stateName = ''
            state.whatsAppNumber = ''
        },
        setCurrentUser:(state, action)=>{
            state.currentUser = action.payload
        }
    }
})

export default authSlice.reducer

export const { handleAltPhoneChange, handleBloodTypeChange ,handleCheckBoxChange, 
               handleDistrictChange, handleEmailChange, handleNameChange, handlePasswordChange,
               handlePhoneChange, setCurrentUser, clearRegData, handleStateNameChange,
               handleWhatsappNumberChange, } = authSlice.actions
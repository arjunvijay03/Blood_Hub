import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    stateName:'',
    bloodType:'',
    districtName:'',
    donorsList:'',
    loading:false,
    notMatch:false,
}

const searchSlice = createSlice({
    name:'searchslice',
    initialState:INITIAL_STATE,
    reducers:{
        changeStateName:(state, action)=>{
            state.stateName = action.payload
        },
        changeDistrictName:(state, action)=>{
            state.districtName = action.payload
        },
        changeBloodType:(state, action)=>{
            state.bloodType = action.payload
        },
        setDonorsList:(state, action)=>{
            state.donorsList = action.payload
        },
        setLoading:(state, action)=>{
            state.loading = action.payload
        },
        setNotMatch:(state, action)=>{
            state.notMatch = action.payload
        }
    }
})

export default searchSlice.reducer
export const { changeBloodType, setLoading, setNotMatch, changeDistrictName, changeStateName, setDonorsList } = searchSlice.actions
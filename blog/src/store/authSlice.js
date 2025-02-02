import { createSlice } from "@reduxjs/toolkit";
const initialState={
    status:false,
    userData:null
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducer:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData // when login giving the login value
        },
        logout:(state)=>{
            state.status=false,
            state.userData=null;//when logout the value will be null
        }

    }
})

export const {login,logout}=authSlice.actions;
export default authSlice.reducer
//4.35.57 how to add postslice.js
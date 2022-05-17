import {createAsyncThunk,createSlice,PayloadAction} from "@reduxjs/toolkit"
import { RootState,AppThunk } from "../../app/store"
import { loginAction } from "./AuthActions"
//servicio


const initialState={
  value:[],
status:"idle"
}

export const authSlice=createSlice({
  name:"auth", initialState,reducers:{

  },extraReducers:{
    [loginAction.pending]:(state)=>{
      state
    }

  }/* (builder) =>{
    
    builder.addCase(loginAction.pending,(state)=>{
    console.log(builder,"builder");

        console.log(state,"actionPendg");
        state.status="loading"
      }).addCase(loginAction.fulfilled,(state,action)=>{
        console.log(action,"action");
        console.log(state,"action");
        state.status="idle";
        state.value=action.payload
      })
  }, */
})

export default authSlice.reducer
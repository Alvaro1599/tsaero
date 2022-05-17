import {createAsyncThunk,createSlice,PayloadAction} from "@reduxjs/toolkit"

import { login } from "../../../Services/Auth.service"
import { LOGIN } from "../../../types/redux/Auth"

export const loginAction=createAsyncThunk(LOGIN,async()=>{

  const response= await login.login({email:"email@gmail.com",password:"123456789"})
console.log(response,"asdasdasdd");

  return response.data
})

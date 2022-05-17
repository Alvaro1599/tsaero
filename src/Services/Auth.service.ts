import { DataLogin, Login } from "../interfaces/Login";
import axios from "axios"
import { APIURL } from "../config/api.config";
export class login{
  static async getInfomation(){
    
  }
  static login(Data:DataLogin):Promise<Login|any>{
  
    return axios.post<Login>(APIURL+"auth/login",{...Data})
  
  }
}

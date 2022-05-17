import { createAction } from "@reduxjs/toolkit";
import { Login } from "../../interfaces/Login";
const baseUrl="auth/"
export const LOGIN = baseUrl+"login"
import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { showSnackbar } from "./app";

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    token: "",
    email:"",
    user: null,
    user_id: null,
    error:false,
}

const slice =createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateisLoading(state,action){
          state.error=action.payload.error
          state.isLoading=action.payload.isLoading;
        },
        logIn(state,action){
            state.isLoggedIn=action.payload.isLoggedIn
            state.token=action.payload.token;
            state.user_id = action.payload.user_id;
        },
        signOut(state,action){
            state.isLoggedIn = false
            state.token = "";
        },
        updateRegisterEmail(state,action){
            state.email=action.payload.email;
        }
    }
})

export default slice.reducer;

//Log in

export function LoginUser(formValues) {
    return async (dispatch,getState) =>{
        await axios.post("/auth/login",{
            ...formValues
        },{
            headers:{
                "Content-Type":"application/json",
            }
        }).then((responce)=>{
            console.log(responce)

            dispatch(slice.actions.logIn({
                isLoggedIn: true,
                token: responce.data.token,
                user_id: responce.data.user_id
            }))

            localStorage.setItem("user_id", responce.data.user_id)

            // dispatch(showSnackbar({severity: "success",message:responce.data.message}))
        })
        .catch((error)=>{
            console.log(error);
            dispatch(showSnackbar({severity: "error",message:error.message}))
        })
        .finally(()=>{
            if (getState().auth.isLoggedIn) {
                window.location.href="/app"
            }
        })
    }
}

export function RegisterUser(formValues) {

    return async (dispatch,getState) =>{
        dispatch(slice.actions.updateisLoading({isLoading: true, error:false}))
        await axios.post("/auth/register",{
            ...formValues
        },{
            headers:{
                "Content-Type":"application/json",
            }
        }).then((responce)=>{
            console.log(responce);
            dispatch(slice.actions.updateRegisterEmail({email: formValues.email}))
            // dispatch(showSnackbar({ severity: "success", message: response.data.message }));
            dispatch(slice.actions.updateisLoading({isLoading: false, error:false}))
        })
        .catch((err)=>{
          console.log(err)
          dispatch(slice.actions.updateisLoading({isLoading: false, error:true}))

        })
        .finally(()=>{
            if (!getState().auth.error) {
                
                window.location.href = "/auth/login"
            }
        })
    }
}

export function VerifyEmail(formValues) {
    return async (dispatch,getState) =>{
        await axios.post("/auth/verify-otp",{
            ...formValues
        },{
            headers:{
                "Content-Type":"application/json",
            }
        }).then((responce)=>{
            console.log(responce);
            dispatch(slice.actions.logIn({
                isLoggedIn: true,
                token: responce.data.token,
            }))

            localStorage.setItem("user_id", responce.data.user_id)
        })
        .catch((err)=>console.log(err))
    }
}

export function LogoutUser() {
    return async (dispatch, getState) => {
      window.localStorage.removeItem("user_id");
      dispatch(slice.actions.signOut());
    };
  }
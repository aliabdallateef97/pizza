import * as actionType from './actionType'
import axios from 'axios'

export const signupLoading=()=>{
   return{
    type:actionType.SIGNUP_LOADING
   }
}

export const signupSuccess=(idToken,userId)=>{
    return{
     type:actionType.SIGNUP_SUCCESS,
     idToken:idToken,
     userId:userId
    }
 }

 export const signupFail=(error)=>{
    return{
     type:actionType.SIGNUP_FAIL,
     error:error
    }
 }

 export const logOut=()=>{
    localStorage.removeItem('Token')
    localStorage.removeItem('expirationTime')
    localStorage.removeItem('userId')
    return{
        type:actionType.AUTH_LOGOUT
    }
 }

 export const authLogOut=(exp)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(logOut())
        },exp*1000)
    }
 }

 export const signup=(email,password,isSignUp)=>{
    return dispatch=>{
        dispatch(signupLoading())
        const authData={
            email:email,
            password:password,
            returnSecureToken:true
        }
        let url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCldLOPuldOkgI4JYEJTxQ9evTfuvYJ3Vk"
        if(!isSignUp){
            url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCldLOPuldOkgI4JYEJTxQ9evTfuvYJ3Vk"
        }
        axios.post(url,authData)
        .then(response=>{
            const expirationTime=new Date(new Date().getTime() + response.data.expiresIn * 1000)
            localStorage.setItem("Token",response.data.idToken)
            localStorage.setItem("userId",response.data.localId)
            localStorage.setItem("expirationTime",expirationTime)
            dispatch(signupSuccess(response.data.idToken,response.data.localId))
            dispatch(authLogOut(response.data.expiresIn))
        })
        .catch(error=>{
            dispatch(signupFail(error.response.data.error))
        })
    }
 }

 export const signCheckState=()=>{
    return dispatch=>{
        const token=localStorage.getItem("Token")
        if(!token){
            dispatch(logOut())
        }else{
            const expirationTime=new Date(localStorage.getItem("expirationTime"))
            if(expirationTime < new Date()){
                dispatch(logOut())
            }else{
                const userId=localStorage.getItem("userId")
                dispatch(signupSuccess(token,userId))
                dispatch(authLogOut((expirationTime.getTime() - new Date().getTime())/1000))
            }
        }
    }
 }
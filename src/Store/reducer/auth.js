import * as actionType from '../action/actionType'

const initialState={
    idToken:null,
    userId:null,
    error:null,
    loading:false
}

const reducer=(state=initialState ,action)=>{
    switch(action.type){
        case(actionType.SIGNUP_LOADING):
        return{
            ...state,
            loading:true,
            error:null
        }
        case(actionType.SIGNUP_SUCCESS):
        return{
            ...state,
            idToken:action.idToken,
            userId:action.userId,
            error:null,
            loading:false
        }
        case(actionType.SIGNUP_FAIL):
        return{
            ...state,
            error:action.error,
            loading:false
        }
        case(actionType.AUTH_LOGOUT):
        return{
            ...state,
            idToken:null,
            userId:null
        }
        default: return state
    }
}

export default reducer
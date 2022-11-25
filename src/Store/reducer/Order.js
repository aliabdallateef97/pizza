import * as actionType from '../action/actionType'

const initialState={
    loading:false,
    purchasing:false,
    orders:null
}

const reducer=(state = initialState ,action)=>{
    switch(action.type){
        case(actionType.SEND_ORDERS):
        return{
            ...state,
            loading:false,
            purchasing:true
        }
        
        case(actionType.SEND_ORDERS_FAIL):
        return{
            ...state,
            loading:false
        }

        case(actionType.UPDATE_LOADING):
        return{
            ...state,
            loading:true,
        }

        case(actionType.PURCHANSING_SUCCESS):
        return{
            ...state,
            purchasing:false
        }

        case(actionType.GET_ORDERS_SUCCESS):
        return{
            ...state,
            loading:false,
            orders:action.order
        }

        case(actionType.GET_ORDERS_FAIL):
        return{
            ...state,
            loading:false
        }

        case(actionType.UPDATE_ORDER_LOADING):
        return{
            ...state,
            loading:true
        }

        default:return state
    }
}

export default reducer
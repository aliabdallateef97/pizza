import * as actionType from './actionType'
import axios from 'axios'

export const sendOrder=()=>{
    return{
        type:actionType.SEND_ORDERS
    }
}

export const sendOrderFail=()=>{
    return{
        type:actionType.SEND_ORDERS_FAIL
    }
}

export const updateLoading=()=>{
    return{
        type:actionType.UPDATE_LOADING
    }
}

export const sendOrderSuccess=(order,token)=>{
    return dispatch=>{
        dispatch(updateLoading())
        axios.post('https://react-pizza-8d498-default-rtdb.firebaseio.com/orders.json?auth='+token,order)
        .then(response=>{
            //this.setState({loading:false});
            //this.props.history.push('/')
            dispatch(sendOrder())
        }
        )
        .catch(error=>
            //this.setState({loading:false})
            dispatch(sendOrderFail()))
    }
}

export const purchaseSuccess=()=>{
    return{
        type:actionType.PURCHANSING_SUCCESS
    }
}

export const getOrdersSuccess=(orders)=>{
    return{
        type:actionType.GET_ORDERS_SUCCESS,
        order:orders
    }
}
export const getOrdersFail=()=>{
    return{
        type:actionType.GET_ORDERS_FAIL
    }
}
export const updateOrderLoading=()=>{
    return{
        type:actionType.UPDATE_ORDER_LOADING
    }
}

export const getOrders=(token,userId)=>{
    return dispatch=>{
        dispatch(updateOrderLoading())
        const query='?auth='+token+'&orderBy="userId"&equalTo="'+userId +'"'
        axios.get('https://react-pizza-8d498-default-rtdb.firebaseio.com/orders.json'+query)
        .then(res=>{
            const order=[]
            for(let key in res.data){
                order.push({
                    ...res.data[key],
                    id:key
                })
            }
            dispatch(getOrdersSuccess(order))
        })
        .catch(err=>{
            dispatch(getOrdersFail())
        })
    }
}
import React,{Component} from 'react'
import Order from '../../components/Order/Order'
import axios from 'axios'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Loader from '../../components/UI/Loader/Loader'
import {connect} from 'react-redux'
import * as orderAction from '../../Store/action/index'

class Orders extends Component{
  
    componentDidMount=()=>{
       this.props.onFetchOrders(this.props.token,this.props.userId)
    }
    render(){
        let orders=<Loader />
        if(!this.props.loading && !this.props.orders){
            orders=null
        }
        if(!this.props.loading && this.props.orders){
            orders=this.props.orders.map(ord=>(
                <Order key={ord.id}
                 price={ord.price}
                ing={ord.ingredients}
                personalData={ord.personalData}
                date={ord.date}
                type1={ord.type1}
                type2={ord.type2}
                type3={ord.type3}
                type4={ord.type4}/>
              ))
        }

        return(
            orders
            )
    }
}

const mapStateToProps= state =>{
    return{
        orders:state.order.orders,
        loading:state.order.loading,
        token:state.auth.idToken,
        userId:state.auth.userId
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onFetchOrders:(token,userId)=>dispatch(orderAction.getOrders(token,userId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios))
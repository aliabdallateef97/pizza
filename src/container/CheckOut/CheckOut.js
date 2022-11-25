import React,{Component} from 'react'
import CheckoutSummary from '../../components/CheckOutSummary/CheckoutSummary'
import {Route , Redirect} from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import {connect} from 'react-redux'
import * as orderAction from '../../Store/action/index'


class CheckOut extends Component{
    

    cancelButton=()=>{
        this.props.history.goBack()
    }
    continueButton=()=>{
        this.props.history.push("/checkout/contact-data")
        this.props.onPurchasingSuccess()
    }
    render(){
        let summary=<Redirect to="/" />
        if(this.props.ings){
            summary=<div>
            <CheckoutSummary
             type1={this.props.type1}
              type2={this.props.type2}
               type3={this.props.type3}
                type4={this.props.type4}
                cancle={this.cancelButton}
                continue={this.continueButton}
                />
                <Route path="/checkout/contact-data" component={ContactData}/>
        </div>
        }
        return summary
    }
}
const mapStateToProps=state=>{
return{
    ings:state.pizza.ingredients,
    type1:state.pizza.type1,
    type2:state.pizza.type2,
    type3:state.pizza.type3,
    type4:state.pizza.type4,
}
}

const mapDispatchtoProps=dispatch=>{
    return{
        onPurchasingSuccess:()=>dispatch(orderAction.purchaseSuccess())
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(CheckOut)
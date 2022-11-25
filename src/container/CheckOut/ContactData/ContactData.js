import React,{Component} from 'react'
import classes from './ContactData.module.css'
import axios from 'axios'
import {withRouter,Redirect} from 'react-router-dom'
import Loader from '../../../components/UI/Loader/Loader'
import Input from '../../../components/UI/Input/Input'
import {connect} from 'react-redux'
import * as orderAction from '../../../Store/action/index'

class ContactData extends Component{
    state={
        personalData:{
            name:{
                inputType:'text',
                placeholder:'Your Name',
                value:'',
                valid:false,
                touched:false
            },
            email:{
                inputType:'email',
                placeholder:'Your E-mail',
                value:'',
                valid:false,
                touched:false
            },
            location:{
                inputType:'text',
                placeholder:'Your Location',
                value:'',
                valid:false,
                touched:false
            },
            phone:{
                inputType:'text',
                placeholder:'Your Number',
                value:'',
                valid:false,
                touched:false
            },
        },
        formValid:false
    }

    checkValidety=(inputElement)=>{
        let isValid=inputElement.value.length >0
        return isValid
    }

    changeEventHandler=(event,inputElement)=>{
        const newPersonalData={
            ...this.state.personalData
        }
        const newInputElement={
            ...newPersonalData[inputElement]
        }
        newInputElement.value=event.target.value
        newInputElement.valid=this.checkValidety(newInputElement)
        newInputElement.touched=true
        newPersonalData[inputElement]=newInputElement
        let newFormValid=true
        for(let key in newPersonalData){
            newFormValid=newPersonalData[key].valid && newFormValid
        }
        this.setState({
            personalData:newPersonalData, formValid:newFormValid
        })
    }

    clickOrderHandler=(event)=>{
        event.preventDefault()
        const personalData={}
        for(let key in this.state.personalData){
            personalData[key]=this.state.personalData[key].value
        }
        const order={
            ingredients:this.props.ings,
            price:this.props.price,
            type1:this.props.type1,
            type2:this.props.type2,
            type3:this.props.type3,
            type4:this.props.type4,
            personalData:personalData,
            date:new Date(),
            userId:this.props.userId
        }
        this.props.onsendOrder(order,this.props.token)
    }
render(){
    let purchaseSucc =this.props.purchasing? <Redirect to="/" /> : null
    const dataArray=[]
    for(let key in this.state.personalData){
        dataArray.push({
            id:key,
            data:this.state.personalData[key]
        })
    }
    let form=(
        <form onSubmit={this.clickOrderHandler}>
                {dataArray.map(inp=>(
                    <Input key={inp.id} 
                    inputType={inp.data.inputType} 
                    value={inp.data.value} 
                    placeholder={inp.data.placeholder}
                    valid={inp.data.valid}
                    touched={inp.data.touched}
                    changed={(event)=>this.changeEventHandler(event,inp.id)}/>
                ))}
                <button disabled={!this.state.formValid} className={classes.btn}>Order</button>
            </form>
    )
    if(this.props.loading){
        form=<Loader />
    }
    return(
        <div className={classes.ContactData}>
            <h3>Please Enter Your Data</h3>
            {form}
            {purchaseSucc}
        </div>
    )
}
}

const mapStateToProps=state=>{
    return{
        ings:state.pizza.ingredients,
        price:state.pizza.price,
        type1:state.pizza.type1,
        type2:state.pizza.type2,
        type3:state.pizza.type3,
        type4:state.pizza.type4,
        loading:state.order.loading,
        purchasing:state.order.purchasing,
        token:state.auth.idToken,
        userId:state.auth.userId
    }
}

const mapDispatchtoProps=dispatch=>{
    return{
        onsendOrder:(order,token)=>dispatch(orderAction.sendOrderSuccess(order,token))
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(withRouter(ContactData,axios))
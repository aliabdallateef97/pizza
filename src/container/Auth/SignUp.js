import React,{Component} from 'react'
import Input from '../../components/UI/Input/Input'
import classes from './auth.module.css'
import {connect} from 'react-redux'
import * as actions from '../../Store/action/index'
import Loader from '../../components/UI/Loader/Loader'
import { Redirect } from 'react-router-dom'



class SignUp extends Component{
    state={
        personalData:{
            email:{
                inputType:'email',
                placeholder:'Your E-mail',
                value:'',
                valid:false,
                touched:false
            },
            password:{
                inputType:'password',
                placeholder:'Your Password',
                value:'',
                valid:false,
                touched:false
            },
        },
        formValid:false,
        isSignUp:true
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

    signupHandler=(event)=>{
        event.preventDefault()
        this.props.onSignUp(this.state.personalData.email.value,this.state.personalData.password.value,this.state.isSignUp)
    }

    changeSignUpHandler=()=>{
        this.setState(prevState=>{
            return{isSignUp :!prevState.isSignUp}
        })
    }

    render(){
        const dataArray=[]
    for(let key in this.state.personalData){
        dataArray.push({
            id:key,
            data:this.state.personalData[key]
        })
    }
    let errorMessage=null
    let errorClass=[classes.error]
    if(this.props.error){
        errorMessage=this.props.error.message
        errorClass=[classes.error,classes.active]
    }

    let form=(
        <div className={classes.auth}>
        <h1>{this.state.isSignUp? "Sign Up" : "Sign In"}</h1>
        <form onSubmit={this.signupHandler}>
                {dataArray.map(inp=>(
                    <Input key={inp.id} 
                    inputType={inp.data.inputType} 
                    value={inp.data.value} 
                    placeholder={inp.data.placeholder}
                    valid={inp.data.valid}
                    touched={inp.data.touched}
                    changed={(event)=>this.changeEventHandler(event,inp.id)}/>
                ))}
                <button disabled={!this.state.formValid} className={classes.btn}>{this.state.isSignUp? "Sign Up" : "Sign In"}</button>
                <span className={classes.Change} onClick={this.changeSignUpHandler}>Move To {this.state.isSignUp? "Sign In" : "Sign Up"}</span>
            </form>
            </div>
    )

    if(this.props.loading){
        form=<Loader />
    }
    let direction=null
    if(this.props.isAuth && !this.props.building){
        direction=<Redirect to="/"/>
    }else if(this.props.isAuth && this.props.building){
        direction=<Redirect to="/checkout"/>
    }

  
  
        return(
            <div className={classes.box}>
            <div className={errorClass.join(' ')}>
                {direction}
            {errorMessage}
            </div>
                {form}
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        loading:state.auth.loading,
        error:state.auth.error,
        isAuth:state.auth.idToken !== null,
        building:state.pizza.building
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onSignUp:(email,password,isSignUp)=>dispatch(actions.signup(email,password,isSignUp))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
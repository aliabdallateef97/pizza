import React from 'react'
import classes from './Input.module.css'

const input=(props)=>{
    let inputElement=''
    let inputArray=[classes.Input]
    switch(props.inputType){
        case("text"):
        if(!props.valid && props.touched){
            inputArray.push(classes.InputInvalid)
        }
        inputElement=<input className={inputArray.join(' ')}
        type="text" placeholder={props.placeholder}
        value={props.value}
        onChange={props.changed}/>
        break;

        case("email"):
        if(!props.valid && props.touched){
            inputArray.push(classes.InputInvalid)
        }
        inputElement=<input className={inputArray.join(' ')}
        type="email" placeholder={props.placeholder} 
        value={props.value}
        onChange={props.changed}/>
        break;

        case("password"):
        if(!props.valid && props.touched){
            inputArray.push(classes.InputInvalid)
        }
        inputElement=<input className={inputArray.join(' ')}
        type="password" placeholder={props.placeholder} 
        value={props.value}
        onChange={props.changed}/>
        break;
        
        default: inputElement=null
        
        return inputElement
    }
    return (
        <div>
            {inputElement}
        </div>
    )
    
}

export default input
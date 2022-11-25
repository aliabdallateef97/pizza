import React from 'react'
import classes from './PizzaControls.module.css'
import PizzaControl from './PizzaControl/PizzaControl'

const PizzaControls=(props)=>{
    let typeIngred=Object.keys(props.ingredients)
  
    return(
    <div className={classes.PizzaControls}>
        <p>Current Price : <strong>{props.price}$</strong></p>
        {typeIngred.map((ing,index)=>(
            <PizzaControl
             key={ing} label={ing}
              add={()=>props.add(ing)}
              remove={()=>props.remove(ing)}
              disable={props.disable[ing]}/>
        ))}
        <button
         className={classes.order}
         disabled={!props.purchase}
         onClick={props.purchasing}>{props.isAuth ? "Order Now" : "Sign Up To Order"}</button>
    </div>
)}

export default PizzaControls
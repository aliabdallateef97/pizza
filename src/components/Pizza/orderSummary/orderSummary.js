import React from 'react'
import Aux from '../../../hoc/Auxilliary'
import classes from './orderSummary.module.css'

const orderSummary=(props)=>{
    const ingSummary=Object.keys(props.ingredients)
    .map(ingKey=>(
        <li key={ingKey}><span style={{textTransform:"capitalize"}}>{ingKey}</span> : {props.ingredients[ingKey]}</li>
    ))
return(
    <Aux>
    <h2>Your Pizza Ingredients Are:</h2>
    <ul>
    {ingSummary}
    </ul>
    <h3>Total Price : <strong>{props.price}</strong> $</h3>
    <p>Continue To Checkout ?</p>
    <button className={classes.btn} onClick={props.continued}>Continue</button>
    <button className={classes.btn} onClick={props.closed}>Cancle</button>
</Aux>
)
}

export default orderSummary
import React from 'react'
import classes from './CheckoutSummary.module.css'
import Pizza from '../Pizza/Pizza'

const checkoutSummary=(props)=>(
<div className={classes.checkout}>
<h1>We hope you enjoy your meal</h1>
<Pizza type1={props.type1} type2={props.type2} type3={props.type3} type4={props.type4}/>
<button className={classes.btn} onClick={props.continue}>Continue</button>
<button className={classes.btn} onClick ={props.cancle}>Cancle</button>
</div>
)

export default checkoutSummary
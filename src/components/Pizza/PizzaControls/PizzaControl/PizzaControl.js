import React from 'react'
import classes from './PizzaControl.module.css'

const PizzaControl=(props)=>(
<div className={classes.PizzaControl}>
    <div className={classes.label}>{props.label}</div>
    <button className={classes.add} onClick={props.add}>Add</button>
    <button className={classes.remove} onClick={props.remove} disabled={props.disable}>Remove</button>
</div>
)

export default PizzaControl
import React from 'react'
import classes from './ToggleButton.module.css'

const toggleButton =(props)=>(
<div className={classes.Menu} onClick={props.open}>
<span></span>
<span></span>
<span></span>
</div>   
)

export default toggleButton
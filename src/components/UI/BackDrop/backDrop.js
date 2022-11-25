import React from 'react'
import classes from './backDrop.module.css'

const backDrop=(props)=>(
<div className={classes.backDrop} onClick={props.close}></div>
)

export default backDrop
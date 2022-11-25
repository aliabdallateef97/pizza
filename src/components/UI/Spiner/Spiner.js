import React from 'react'
import spinerImg from '../../../asset/loader.gif'
import classes from './Spiner.module.css'
const spiner=()=>(
    <div className={classes.Spiner}>
        <img src={spinerImg} alt="" />
    </div>
)

export default spiner
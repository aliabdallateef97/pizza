import React from 'react'
import classes from './Logo.module.css'
import logoImg from '../../../asset/logo5.png'

const logo=()=>(
<div className={classes.Logo}>
    <img src={logoImg} alt="MyPizza"/>
</div>
)

export default logo
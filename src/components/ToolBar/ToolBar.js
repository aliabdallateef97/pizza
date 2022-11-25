import React from 'react'
import classes from './ToolBar.module.css'
import Logo from './Logo/Logo'
import Navigation from '../Navigation/Navigation'
import ToggleButton from './ToggleButton/ToggleButton'

const toolBar =(props)=>(
    <header className={classes.ToolBar}>
        <Logo />
        <nav className={classes.navShow}>
        <Navigation isAuth={props.isAuth}/>
        </nav>
       <ToggleButton open={props.open}/>
    </header>
)

export default toolBar
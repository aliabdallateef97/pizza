import React from 'react'
import classes from './Navigation.module.css'
import NavigationItem from './NavigationItem/NavigationiTem'

const navigation=(props)=>(
    <ul className={classes.Navigation}>
        <NavigationItem  link="/">Pizza Builder</NavigationItem>
        {props.isAuth?<NavigationItem link="/orders">Orders</NavigationItem>:null}
        {!props.isAuth 
        ?<NavigationItem link="/signup">Sign Up</NavigationItem>
        :<NavigationItem link="/logout">Log Out</NavigationItem>}
    </ul>

)

export default navigation 
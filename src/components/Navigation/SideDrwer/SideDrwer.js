import React from 'react'
import Logo from '../../ToolBar/Logo/Logo'
import Navigation from '../Navigation'
import classes from './SideDrwer.module.css'
import Auxilliary from '../../../hoc/Auxilliary'
import BackDrop from '../../UI/BackDrop/backDrop'

const sideDrwer=(props)=>{
    let allClasses=[classes.SideDrwer,classes.Close]
    if(props.show){
        allClasses=[classes.SideDrwer,classes.Open]
    }

    return(
        <Auxilliary>
        {props.show ? <BackDrop close={props.close} /> : null}
<div className={allClasses.join(' ')}>
    <div className={classes.Logo}>
    <Logo />
    </div>
    <Navigation isAuth={props.isAuth}/>
</div>
    </Auxilliary>
    )
}

export default sideDrwer
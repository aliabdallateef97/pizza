import React,{Component} from 'react'
import classes from './Modal.module.css'
import BackDrop from '../BackDrop/backDrop'
import Aux from '../../../hoc/Auxilliary'

class Modal extends Component{
    shouldComponentUpdate=(nextProps,nextState)=>{
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }
   
    render(){
        return(
    <Aux>
        {this.props.show? <BackDrop close={this.props.close}/>:null}
        <div className={classes.Modal}
        style={this.props.show ? {transform:"translateY(0)",opacity:"1"}
        :{transform:"translateY(-100vh)",opacity:"0"}}
        >
        {this.props.children}
        </div>
    </Aux>
        )
    }
}

export default Modal
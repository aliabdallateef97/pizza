import React,{Component} from 'react'
import classes from './Layout.module.css'
import ToolBar from '../ToolBar/ToolBar'
import SideDrwer from '../Navigation/SideDrwer/SideDrwer'
import {connect} from 'react-redux'

class Layout extends Component{
  state={
    show:false
  }

  closeBackDropHandler=()=>{
    this.setState({show:false})
  }
  openBackDropHandler=()=>{
    this.setState({show:true})
  }

  render(){
    return(
      <div className={classes.Layout}>
      <ToolBar open={this.openBackDropHandler} isAuth={this.props.isAuth}/>
      <SideDrwer 
      isAuth={this.props.isAuth}
      show={this.state.show}
      close={this.closeBackDropHandler}/>
     <main>
         {this.props.children}
     </main>
    </div>
    )
  }
}

const mapStateToProps=state=>{
  return{
    isAuth: state.auth.idToken !==null
  }
}

export default connect(mapStateToProps)(Layout)
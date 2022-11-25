import React,{Component} from 'react';
import Layout from "./components/Layout/Layout";
import PizzaBulder from "./container/PizzaBulder/PizzaBulder";
import classes from './App.module.css'
import pizzaPhoto from './asset/pizza.webp'
import { Route,Switch,Redirect } from "react-router-dom";
import LogOut from "./container/Auth/LogOut";
import {connect} from 'react-redux'
import * as actions from './Store/action/index'
import asyncComponent from './hoc/asyncComponent'

const asyncOrders=asyncComponent(()=>{
  return import("./container/Orders/Orders")
});
const asyncSignUp=asyncComponent(()=>{
  return import("./container/Auth/SignUp")
});
const asyncCheckOut=asyncComponent(()=>{
  return import("./container/CheckOut/CheckOut")
});

class App extends Component {
  componentDidMount=()=>{
    this.props.onsignCheck()
  }
 render(){
  let form=(
    <Switch>
      <Route path="/" exact component={PizzaBulder}/>
      <Route path="/signup" component={asyncSignUp}/>
      <Redirect to="/"/>
    </Switch>
  )
  if(this.props.isAuth){
    form=(<Switch>
      <Route path="/" exact component={PizzaBulder}/>
       <Route path="/checkout" component={asyncCheckOut}/>
       <Route path="/orders" component={asyncOrders}/>
       <Route path="/signup" component={asyncSignUp}/>
       <Route path="/logout" component={LogOut}/>
       <Redirect to="/"/>
    </Switch>)
  }
  return (
    <div>
     <img className={classes.App} src={pizzaPhoto} alt="pizza" />
     <div className={classes.overlay}></div>
      <Layout>
        {form}
     </Layout>
    </div>
   );
 }
}
const mapStateToProps=state=>{
  return{
    isAuth:state.auth.idToken !==null
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    onsignCheck:()=>dispatch(actions.signCheckState())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

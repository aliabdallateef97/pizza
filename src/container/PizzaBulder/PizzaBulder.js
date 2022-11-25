import React,{Component} from 'react'
import Aux from '../../hoc/Auxilliary'
import Pizza from '../../components/Pizza/Pizza'
import PizzaControls from '../../components/Pizza/PizzaControls/PizzaControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Pizza/orderSummary/orderSummary'
import Spiner from '../../components/UI/Spiner/Spiner'
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Loader from '../../components/UI/Loader/Loader'
import axios from 'axios'
import {connect} from 'react-redux'
import * as pizzaAction from '../../Store/action/index'



class PizzaBulder extends Component{
    state={
        purchasing:false,
        loading:false,
    }

    componentDidMount=()=>{
       this.props.onFetchIngredient()
    }


    purchasingHundler=()=>{
        if(this.props.isAuth){
            this.setState({purchasing:true})
        }else{
            this.props.history.push("/signup")
        }
    }

    purchasingCloseHundler=()=>{
        this.setState({purchasing:false})
    }

    purchasingContinueHandler=()=>{
        const queryParams=[]
        for(let i in this.props.ings){
            queryParams.push(encodeURIComponent(i)+"="+encodeURIComponent(this.props.ings[i]))
        }
        const queryString=queryParams.join('&')
        this.props.history.push({
            pathname:"/checkout",
            search:'?'+queryString
        })
    }
    

    
    
    render(){
        const disableIngredients={
            ...this.props.ings
        }
        for(let key in disableIngredients){
            disableIngredients[key] =disableIngredients[key] <= 0
        }


       let orderSummary=null
            
            let Pizzaa=<Loader /> 
            if(this.props.error){
                Pizzaa=null
            }   

            if(this.props.ings){
                Pizzaa=(
                    <Aux>
                        <Pizza
                    ingredients={this.props.ings}
                     type1={this.props.type1}
                     type2={this.props.type2}
                     type3={this.props.type3}
                     type4={this.props.type4}
                    />
    
                    <PizzaControls
                     ingredients={this.props.ings}
                      add={this.props.total < 4 ?this.props.onAdd : null}
                      remove={this.props.onRemove}
                      disable={disableIngredients}
                      price={this.props.price}
                      purchase={this.props.purchase}
                      isAuth={this.props.isAuth}
                      purchasing={this.purchasingHundler}/>
                    </Aux>
                )    
                orderSummary=<OrderSummary
                ingredients={this.props.ings}
                closed={this.purchasingCloseHundler}
                continued={this.purchasingContinueHandler}
                price={this.props.price}/>    
            }

            if(this.state.loading){
                orderSummary=<Spiner />
            }

            

        return(
            <Aux>
                <Modal show={this.state.purchasing} >
                    {orderSummary}
                </Modal>
                {Pizzaa}
            </Aux>
        )
    }
}

const mapStateToProps = state =>{
    return{
        ings:state.pizza.ingredients,
        price:state.pizza.price,
        total:state.pizza.total,
        type1:state.pizza.type1,
        type2:state.pizza.type2,
        type3:state.pizza.type3,
        type4:state.pizza.type4,
        purchase:state.pizza.purchase,
        error:state.pizza.error,
        isAuth:state.auth.idToken !== null
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onAdd : (ing)=>dispatch(pizzaAction.addAll(ing)),
        onRemove: (ing)=> dispatch(pizzaAction.removeAll(ing)),
        onFetchIngredient:()=>dispatch(pizzaAction.fetchIngredients())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(PizzaBulder , axios))
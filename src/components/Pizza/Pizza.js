import React from 'react'
import {PizzaIngredient1 , PizzaIngredient2 ,PizzaIngredient3 ,PizzaIngredient4} from './PizzaIngredients/pizzaIngredients'
import classes from './Pizza.module.css'

const pizza=(props)=> {
    let rot=45
        return(
            <div className={classes.pizza} style={{width:props.width , height:props.height}}>
            <div className={classes.dough} style={{transform:"rotate("+rot+"deg)"}} >
                <div className={classes.cheese } >
                    <PizzaIngredient1 type={props.type1} top={0} left={0} rotate={0}/>
                    <PizzaIngredient2 type={props.type2} top2={0} left2={50} rotate2={90}/>
                    <PizzaIngredient3 type={props.type3} top3={50} left3={50} rotate3={180}/>
                    <PizzaIngredient4 type={props.type4} top4={50} left4={0} rotate4={-90}/>
                    
                </div>
            </div>
        </div>
        )
    }


export default pizza
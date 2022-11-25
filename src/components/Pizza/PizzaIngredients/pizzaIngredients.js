import React from 'react'
import Ingredient from './Ingredients/Ingredients'


export const PizzaIngredient1=(props)=>{
  let ingredientType=null

    switch(props.type){
      case("corn"):
      ingredientType=<Ingredient type={props.type}  top={props.top} left={props.left} rotate={props.rotate}/>
      break;
      case("vegetable"):
      ingredientType=<Ingredient type={props.type}  top={props.top} left={props.left} rotate={props.rotate}/>
      break;
      case("pepperoni"):
      ingredientType=<Ingredient type={props.type}  top={props.top} left={props.left} rotate={props.rotate}/>
      break;
      case("mushroom"):
      ingredientType=<Ingredient type={props.type}  top={props.top} left={props.left} rotate={props.rotate}/>
      break;
      default: return null
    }
    return ingredientType
  }


    export const PizzaIngredient2=(props)=>{
      let ingredientType=null
      switch(props.type){
        case("corn"):
        ingredientType=<Ingredient type={props.type}   top={props.top2} left={props.left2} rotate={props.rotate2}/>
        break;
        case("vegetable"):
        ingredientType=<Ingredient type={props.type}   top={props.top2} left={props.left2} rotate={props.rotate2}/>
        break;
        case("pepperoni"):
        ingredientType=<Ingredient type={props.type}   top={props.top2} left={props.left2} rotate={props.rotate2}/>
        break;
        case("mushroom"):
        ingredientType=<Ingredient type={props.type}  top={props.top2} left={props.left2} rotate={props.rotate2}/>
        break;
        default: return null
      }
      return ingredientType
    }
    
    export const PizzaIngredient3=(props)=>{
      let ingredientType=null
      switch(props.type){
        case("corn"):
        ingredientType=<Ingredient type={props.type}   top={props.top3} left={props.left3} rotate={props.rotate3}/>
        break;
        case("vegetable"):
        ingredientType=<Ingredient type={props.type}   top={props.top3} left={props.left3} rotate={props.rotate3}/>
        break;
        case("pepperoni"):
        ingredientType=<Ingredient type={props.type}   top={props.top3} left={props.left3} rotate={props.rotate3}/>
        break;
        case("mushroom"):
        ingredientType=<Ingredient type={props.type}  top={props.top3} left={props.left3} rotate={props.rotate3}/>
        break;
        default: return null
      }
      return ingredientType
    }

    export const PizzaIngredient4=(props)=>{
      let ingredientType=null
      switch(props.type){
        case("corn"):
        ingredientType=<Ingredient type={props.type}   top={props.top4} left={props.left4} rotate={props.rotate4}/>
        break;
        case("vegetable"):
        ingredientType=<Ingredient type={props.type}   top={props.top4} left={props.left4} rotate={props.rotate4}/>
        break;
        case("pepperoni"):
        ingredientType=<Ingredient type={props.type}   top={props.top4} left={props.left4} rotate={props.rotate4}/>
        break;
        case("mushroom"):
        ingredientType=<Ingredient type={props.type}  top={props.top4} left={props.left4} rotate={props.rotate4}/>
        break;
        default: return null
      }
      return ingredientType
    }
  

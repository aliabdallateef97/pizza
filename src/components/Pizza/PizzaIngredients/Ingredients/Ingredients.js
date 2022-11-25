import React from 'react'
import classes from './Ingredients.module.css'

const ingredients=(props)=>{
    let ingredient=null
    switch(props.type){
        case("corn"):
        ingredient=<div className={classes.corn} style={{top:""+props.top+"%" ,left:""+props.left+"%" , transform:"rotate("+props.rotate+"deg)" }}>
        <div className={classes.corn1}></div>
        <div className={classes.corn2}></div>
        <div className={classes.corn3}></div>
        <div className={classes.corn4}></div>
        <div className={classes.corn5}></div>
        <div className={classes.corn6}></div>
        <div className={classes.corn7}></div>
        <div className={classes.corn8}></div>
        <div className={classes.corn9}></div>
        <div className={classes.corn10}></div>
        </div>
        break;
        case('vegetable'):
        ingredient=<div className={classes.vegetable} style={{top:""+props.top+"%" ,left:""+props.left+"%" , transform:"rotate("+props.rotate+"deg)" }}>
         <div className={classes.onion1}></div>
        <div className={classes.onion2}></div>
        <div className={classes.onion3}></div>
        <div className={classes.onion4}></div>
        <div className={classes.tomato1}></div>
        <div className={classes.tomato2}></div>
        <div className={classes.tomato3}></div>
        <div className={classes.papper1}></div>
        <div className={classes.papper2}></div>
        <div className={classes.papper3}></div>
      </div>
      break;
      case('pepperoni'):
      ingredient=<div className={classes.pepperoni} style={{top:""+props.top+"%" ,left:""+props.left+"%" , transform:"rotate("+props.rotate+"deg)" }}>
      <div className={classes.pepperoni1}></div>
      <div className={classes.pepperoni2}></div>
      <div className={classes.pepperoni3}></div>
    </div>
    break;
    case('mushroom'):
    ingredient=<div className={classes.mushroom} style={{top:""+props.top+"%" ,left:""+props.left+"%" , transform:"rotate("+props.rotate+"deg)" }}>
    <div className={classes.mushroom1}></div>
    <div className={classes.mushroom2}></div>
    <div className={classes.mushroom3}></div>
    <div className={classes.mushroom4}></div>
    <div className={classes.mushroom5}></div>
  </div>
  break;
  default : ingredient=null
    }
    return ingredient;


    }


export default ingredients
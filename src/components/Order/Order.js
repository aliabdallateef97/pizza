import React from 'react'
import classes from './Order.module.css'
import Pizza from '../Pizza/Pizza'

const order=(props)=>{
    const ingredients=[]
    for(let key in props.ing){
        ingredients.push({
            name:key,
            amount:props.ing[key]
        })
    }
    return(
        <div className={classes.Order}>
            <div className={classes.Pizza}>
            <Pizza type1={props.type1} type2={props.type2} type3={props.type3} type4={props.type4} width="200px" height="200px"/>
            </div>
        <div className={classes.Personal}>
            <p>Name : <strong>{props.personalData.name}</strong></p>
            <p>Order Date : <strong>{props.date}</strong></p>
        <p>Ingredients: <strong>{ingredients.map(ing=><span key={ing.name}>{ing.amount > 0 ? ing.name + " ( "+ing.amount+" ) ": null} </span>)}</strong></p>
        <p>Price : <strong>{props.price} $</strong></p>
        </div>
</div>
    )
}

export default order
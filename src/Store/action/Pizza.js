import * as actionType from './actionType'
import axios from 'axios'

export const addIngredients=(ing)=>{
    return{
        type:actionType.ADD_INGREDIANT,
        ingName:ing
    }
}

export const deleteIngredients=(ing)=>{
    return{
        type:actionType.REMOVE_INGREDIANT,
        ingName:ing
    }
}

export const updateAdded=(ing)=>{
    return{
        type:actionType.UPDATE_ADD,
        ingName:ing
    }
}

export const updateRemove=(ing)=>{
    return{
        type:actionType.UPDATE_REMOVE,
        ingName:ing
    }
}

export const checkTotal=()=>{
    return{
        type:actionType.CHECK_TOTAL
    }
}

export const addAll=(ing)=>{
     return dispatch=>{
        dispatch(addIngredients(ing))
        dispatch(updateAdded(ing))
        dispatch(checkTotal())
    }
}

export const removeAll=(ing)=>{
    return dispatch=>{
        dispatch(deleteIngredients(ing))
        dispatch(updateRemove(ing))
        dispatch(checkTotal())
    }
}

export const setIngredients=(ingredients)=>{
    return{
        type:actionType.SET_INGREDIENTS,
        ingredients:ingredients
    }
}

export const setIngredientsFail=()=>{
    return{
        type:actionType.SET_INGREDIENTS_FAIL
    }
}

export const fetchIngredients=()=>{
    return dispatch =>{
        axios.get('https://react-pizza-8d498-default-rtdb.firebaseio.com/ingredients.json')
        .then(response=> dispatch(setIngredients(response.data)))
        .catch(error=>dispatch(setIngredientsFail()))
    }
}

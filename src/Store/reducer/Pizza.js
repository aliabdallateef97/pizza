import * as actionType from '../action/actionType'

const initialState={
    ingredients:null,
        price:3,
        total:0,
        purchase:false,
        type1:"",
        type2:"",
        type3:"",
        type4:"",
        error:false,
        building:false
}

const ingPrice={
    vegetable: 3,
    corn: 2,
    pepperoni :5,
    mushroom: 4
}



const reducer=(state = initialState , action)=>{
    switch(action.type){
        case(actionType.UPDATE_ADD):
        if(state.total === 1){
            return{
                ...state,
                type1:action.ingName
            }
        }else if(state.total === 2){
            return{
                ...state,
                type2:action.ingName
            }
        }else if(state.total === 3){
            return{
                ...state,
                type3:action.ingName
            }
        }else{
            return{
                ...state,
                type4:action.ingName
            }
        }

        case(actionType.CHECK_TOTAL):
        if(state.total === 4){
            return{
                ...state,
                purchase:true
            }
        }else{
            return{
                ...state,
                purchase:false
            }
        }


        case(actionType.ADD_INGREDIANT):
        return{
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingName] : state.ingredients[action.ingName] +1
            },
            price : state.price + ingPrice[action.ingName],
            total : state.total + 1,
            building:true    
        }


        case(actionType.REMOVE_INGREDIANT):
        return{
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingName] : state.ingredients[action.ingName] -1
            },
            price : state.price - ingPrice[action.ingName],
            total : state.total - 1          
        }


        case(actionType.UPDATE_REMOVE):
        if(state.total === 0){
            return{
                ...state,
                type1:""
            }
        }else if(state.total === 1){
            if(state.type2 === action.ingName){
                return{
                    ...state,
                    type2:""
                }
            }else{
                return{
                    ...state,
                    type1:state.type2,
                    type2:""
                }
            }
        }else if(state.total === 2){
            if(state.type3 === action.ingName){
                return{
                    ...state,
                    type3:""
                }
            }else if(state.type2 === action.ingName){
                return{
                    ...state,
                    type2:state.type3,
                    type3:""
                }
            }else{
                return{
                    ...state,
                    type1:state.type2,
                    type2:state.type3,
                    type3:""
                }
            }
        }else if(state.total === 3){
            if(state.type4 === action.ingName){
                return{
                    ...state,
                    type4:""
                }
            }else if(state.type3 === action.ingName){
                return{
                    ...state,
                    type3:state.type4,
                    type4:""
                }
            }else if(state.type2 === action.ingName){
                return{
                    ...state,
                    type2:state.type3,
                    type3:state.type4,
                    type4:""
                }
            }else {
                return{
                    ...state,
                    type1:state.type2,
                    type2:state.type3,
                    type3:state.type4,
                    type4:""
                }
        }} 
        case(actionType.SET_INGREDIENTS):
        return{
            ...state,
            ingredients:action.ingredients,
            error:false,
            purchase:false,
            building:false,
            total:0,
            type1:"",
            type2:"",
            type3:"",
            type4:"",
            price:3
        }

        case(actionType.SET_INGREDIENTS_FAIL):
        return{
            ...state,
            error:true
        }

        default:return state
    }
}
   

export default reducer
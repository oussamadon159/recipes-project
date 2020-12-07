import { Ingredient } from '../../Model/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
    ingredients:[
        new Ingredient('Apples',5),
        new Ingredient('Bread',10),
     ]
}

export function ShoppingListReducer(state = initialState,
    action:ShoppingListActions.AddIngredient){

    switch(action.type){
        case ShoppingListActions.add_ingredient : 
        return {
            ...state,
            ingredients:[...state.ingredients,action.payload] // copying the old state of ingredients
        };
        default:
            return state;
    }


}
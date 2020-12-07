import { from } from 'rxjs';
import { Ingredient } from './../../Model/ingredient.model';
import { Action } from '@ngrx/store';

export const add_ingredient =  'ADD_INGREDIENT';


export class AddIngredient implements Action{

    // Action is an interface 
  readonly  type = add_ingredient;
  payload:Ingredient;
}



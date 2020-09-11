import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './../Model/ingredient.model';
import { Subject } from 'rxjs';




export class IngredientService{


  Adding = new Subject<Ingredient[]>();
   Edit = new Subject<number>();

private ingredients:Ingredient[]=[
   new Ingredient('Apples',5),
   new Ingredient('Bread',10),
]


getIngredients(){
    return this.ingredients;
}

AddIngredients(ingredientEl:Ingredient){
    this.ingredients.push(ingredientEl);
    this.Adding.next(this.ingredients.slice());
  }

AddIng(ingredient:Ingredient[]){
  this.ingredients.push(...ingredient);
}
EditiongIngredient(index:number){
  return this.ingredients[index];
  
}
OnUpdateingredient(index:number,newIng:Ingredient){
   this.ingredients[index] = newIng;
    this.Adding.next(this.ingredients);

}
OnDeleteItem(index:number){
  this.ingredients.splice(index,1);
  this.Adding.next(this.ingredients);

}

}
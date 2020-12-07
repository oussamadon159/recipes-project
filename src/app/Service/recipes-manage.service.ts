import { Ingredient } from '../Model/ingredient.model';

import { Recipe } from '../Model/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { IngredientService } from './ingredient.service';
import { Subject } from 'rxjs';


@Injectable()

export class RecipeService{

 SelectedRecipe = new Subject<Recipe[]>();
  AddRecipe = new EventEmitter<Recipe>();
constructor(private IngService:IngredientService){}
 IngMove = new Subject<Ingredient[]>();
 private recipes:Recipe[]=[
  new Recipe('Spaghetti',
  'Spaghettis sont des plats de pâtes longues de la cuisine italienne.',
  'https://img.cuisineaz.com/660x660/2013-12-20/i2142-spaghetti-a-la-sauce-tomate.jpg',
    [
      new Ingredient('Tomatos',5),
      new Ingredient('Spaghetti',3),
      new Ingredient('Sauce',2),
    ]

   ,'Spaghetti or spaghetti is a long, thin and cylindrical pasta dish, typical of Italian cuisine.'),
  new Recipe('Couscous',
  "Plat d'origine Marocaine, avec des légumes et une sauce épicée.",
  'https://static.750g.com/images/640-420/742087c359f9f79cd51797233e9e4206/couscous.jpg',
  [
    new Ingredient('Tomatos',2),
    new Ingredient('Potatos',3),
    new Ingredient('Onions',6),
  ]
  ,'Couscous is on the one hand a durum wheat semolina prepared in olive oil and on the other hand, a culinary specialty from Berber cuisine, based on couscous, vegetables, spices, oil. olive, and meat or fish.'),
  new Recipe('Tajine',
  "Le tajine est par tradition, un plat familial et convivial.",
  'https://files.meilleurduchef.com/mdc/photo/recette/tajine-agneau/tajine-agneau-1200.jpg',
  [
    new Ingredient('Bread',3),
    new Ingredient('Potatos',3),
    new Ingredient('Meat',2)
  ]
  ,'A tagine is just as much a cooking and serving dish, wide and shallow, surmounted by a conical terracotta lid, sometimes glazed, as a culinary preparation cooked in this utensil.'),
  new Recipe('Tacos',
  "Un tacos est un antojito de la cuisine mexicaine.",
  'https://www.ptitchef.com/imgupl/recipe/french-tacos--md-457637p713643.jpg',
 [
    new Ingredient('Tomatos',5),
    new Ingredient('Sauce',3),
    new Ingredient('Meat',6),
  ]
  ,'A taco is an antojito (snack) of Mexican cuisine that consists of a corn tortilla folded or rolled up on itself almost always containing a filling most often based on meat, sauce, onion and chopped fresh cilantro 1.'),
  ]

  setRecipes(recipes:Recipe[]){
    this.recipes = recipes;
    this.SelectedRecipe.next(recipes);
  }

 getRecipeIngredients(index:number){
  return this.recipes[index].ingredients;
 }
  // method to call in order to show the recipes
  getRecipes(){
   return this.recipes;// copting the recipes array
  }

 AddToShoppingList(ingredient:Ingredient[]){
  this.IngMove.next(ingredient);
  this.IngService.AddIng(ingredient);
 }
 AddNewRecipe(recipeEl:Recipe){
   this.recipes.unshift(recipeEl);
   this.SelectedRecipe.next(this.recipes);
 }
 // method to get the single recipe
 getRecipe(index:number){
   return this.recipes[index] // index reffering to position in the array of recipes

 }
 DeleteRecipe(index:number){
   this.recipes.splice(index,1);

 }
 DeleteIngredients(index:number,id:number){
  this.recipes[index].ingredients.splice(id,1);
 }
onUpdateRecipe(index:number,newRecipe:Recipe){
  this.recipes[index] = newRecipe;
   this.SelectedRecipe.next(this.recipes);

}
}

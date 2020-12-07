import { AuthService } from './../auth.service';
import { Recipe } from './../Model/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from './recipes-manage.service';
import { map, tap, take, exhaustMap } from 'rxjs/operators'
import { Subject } from 'rxjs';
import { AuthServiceSign } from '../auth/auth.service';
@Injectable({providedIn:'root'})
export class HttpRequestService{

    constructor(private http:HttpClient,private recipeservice:RecipeService,private authService:AuthServiceSign){

    }
    ingAmount = new Subject<number>();
StoreRecipes(recipes:Recipe[]){

    this.http.put('https://recipe-request.firebaseio.com/recipes.json',recipes).subscribe(
        (response)=>{
            console.log(response);
        }
    )

}

OnFecthRecipes(){

  return  this.http.get<Recipe[]>(
            'https://recipe-request.firebaseio.com/recipes.json',
            ).pipe(
                map(recipes=>{
                    return recipes.map(recipe=>{
                        return {...recipe,ingredients:recipe.ingredients? recipe.ingredients : []};
                    })
                }),tap(recipes=>{
                   this.recipeservice.setRecipes(recipes);
                })
            );



}


}

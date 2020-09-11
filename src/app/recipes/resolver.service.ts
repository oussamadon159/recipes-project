import { Observable } from 'rxjs';
import { HttpRequestService } from './../Service/http-request.service';
import { Recipe } from './../Model/recipe.model';
import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({providedIn:'root'})
export class RecipeResolverService implements Resolve<Recipe[]>{

    constructor(private http:HttpRequestService){}
resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any> | Promise<any> | any{

    return this.http.OnFecthRecipes();
}
}
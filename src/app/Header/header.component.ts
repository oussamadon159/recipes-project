import { Subscription } from 'rxjs';
import { Recipe } from './../Model/recipe.model';
import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../Service/recipes-manage.service';
import { HttpRequestService } from '../Service/http-request.service';
import { AuthServiceSign } from '../auth/auth.service';


@Component({
selector:'app-header',
templateUrl:'header.component.html',
styleUrls:['header.component.css'],
})

export class HeaderComponent implements OnInit , OnDestroy{
loadedIng=[];
private userSub:Subscription;
isAuthenticated = false;
constructor(private authService:AuthService,private http:HttpRequestService,private recipeService:RecipeService,private auth:AuthServiceSign){}

 ngOnInit(){
  this.userSub =  this.auth.user.subscribe(user=>{
    this.isAuthenticated = !!user;
    console.log(!user);
    console.log(!!user);
  })
 }

    LogIn(){
     this.authService.login()
    }
    LogOut(){
    this.authService.logout();
    }
    OnLogOut(){
        this.auth.logout();
    }
    OnSaveData(){
        const recipes = this.recipeService.getRecipes();
     this.http.StoreRecipes(recipes);

        
    }
    OnFetchData(){
        this.http.OnFecthRecipes().subscribe();
    }
    ngOnDestroy(){
        this.userSub.unsubscribe();
    }
    
}
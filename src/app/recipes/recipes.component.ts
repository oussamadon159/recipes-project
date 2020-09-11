import { Recipe } from './../Model/recipe.model';
import { RecipeService } from '../Service/recipes-manage.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  Selected:Recipe;

  constructor(private recipeServ:RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(){
    //subsbribe method simply inform you about whenever any changes happens
 
  }
  // '1' === true & '0' === false
  // QueryParamsHandling : 'string'
  // QueryParamsHandling:'preserve' is useed to keep the information (not lose them)
  // QueryParamsHandling:'merge' used to add new ones 
  AddRecipe(){
  
  this.router.navigate(['new'],{relativeTo:this.route}); // inform the router about our currently route
 

  }

}

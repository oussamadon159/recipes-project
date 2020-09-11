import { ActivatedRoute, Params, Router } from '@angular/router';
import { IngredientService } from './../../Service/ingredient.service';
import { RecipeService } from '../../Service/recipes-manage.service';
import { Recipe } from './../../Model/recipe.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 recipe:Recipe;
 id:number;
 ingCheck:boolean=false;
  constructor(private recipeService:RecipeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    // first thing is to fetch the dynamique property :id from the app-routing
    this.ingCheck = true;
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
        if(this.recipe.ingredients.length < 1 ){
          this.ingCheck = false;

        }
        else{
          this.ingCheck = true;
        }
      }
    )
  }
  ToshoppingList(){
   this.recipeService.AddToShoppingList(this.recipe.ingredients);
  }
  OnEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  //  this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
  }
  OnDeleteRecipe(){
    this.recipeService.DeleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}

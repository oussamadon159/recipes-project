import { Recipe } from './../../Model/recipe.model';
import { RecipeService } from '../../Service/recipes-manage.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipesService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
    this.recipesService.SelectedRecipe.subscribe(
      (recipesElem) => {
        this.recipes = recipesElem
      }
    )

  }

}

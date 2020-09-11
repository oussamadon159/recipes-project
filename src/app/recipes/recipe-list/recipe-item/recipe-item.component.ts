
import { RecipeService } from '../../../Service/recipes-manage.service';
import { Recipe } from './../../../Model/recipe.model';
import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe:Recipe;
@Input() index:number;
  constructor(private recipeServ:RecipeService,private router:ActivatedRoute ) { }

  ngOnInit(): void {
  
  }
  
  OnClick(index:number){
    
  }
}

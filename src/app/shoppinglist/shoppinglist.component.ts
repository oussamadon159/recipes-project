import { IngredientService } from './../Service/ingredient.service';
import { Ingredient } from './../Model/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit,OnDestroy {
ingredients:Ingredient[];
private StoreIng:Subscription;
newIngredients:Ingredient[]=[];
error=null;
  constructor(private IngService:IngredientService) { }

  ngOnInit(): void {
    this.ingredients = this.IngService.getIngredients();
    this.StoreIng = this.IngService.Adding.subscribe(
      (ingredient:Ingredient[])=>{
       this.ingredients = ingredient;
      }
    )
    
  }
ngOnDestroy(){
  this.StoreIng.unsubscribe()
}
OnEdit(index:number){
this.IngService.Edit.next(index);
}

}

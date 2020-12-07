import { IngredientService } from './../Service/ingredient.service';
import { Ingredient } from './../Model/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoggingService } from '../LoggingService';
import { Store } from '@ngrx/store';
import { ThrowStmt } from '@angular/compiler';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
  animations:[
    trigger('mouvement',[
      transition('void => *',[
        style({
          opacity:0,
          transform:'translateX(-100px)',
        }),animate(300)
      ]),
      transition('* => void',[animate(300),  style({
        opacity:0,
        transform:'translateX(100px)',
      })])
    ])
  ]
})
export class ShoppinglistComponent implements OnInit,OnDestroy {
// ingredients:Observable<{ingredients:Ingredient[]}>
private StoreIng:Subscription;
newIngredients:Ingredient[]=[];
ingredients:Ingredient[]=[];
error=null;
  constructor(private IngService:IngredientService,private loggingService:LoggingService,private store:Store<{shoppinglist:{ingredients:Ingredient[]}}>) { }

  ngOnInit(): void {
  this.ingredients =  this.IngService.getIngredients();
    // this.ingredients = this.IngService.getIngredients();
    // this.StoreIng = this.IngService.Adding.subscribe(
    //   (ingredient:Ingredient[])=>{
    //    this.ingredients = ingredient;
    //   }
    // )
    // this.loggingService.printLog('Hello from New Developper');
    
  }
ngOnDestroy(){
  // this.StoreIng.unsubscribe()
}
OnEdit(index:number){
this.IngService.Edit.next(index);
}

}

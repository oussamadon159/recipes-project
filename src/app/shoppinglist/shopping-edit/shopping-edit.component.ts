import { Observable, Subscription } from 'rxjs';
import { Ingredient } from './../../Model/ingredient.model';
import { IngredientService } from './../../Service/ingredient.service';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,CanComponentDeactivate,OnDestroy {

@ViewChild('form',{static:false}) SlForm:NgForm
AllowAdd:boolean = false;
changedSaved = false;
@Input() index : number;
ShoppingListform:FormGroup;
subscription:Subscription;
EditMode = false;
edittedItemIndex:number
EditedITem : Ingredient;
  constructor(private IngService:IngredientService,private router:Router,private route:ActivatedRoute) { }

  canDeactivate():Observable<boolean> | Promise<boolean> | boolean{
    if(!this.AllowAdd){
      return true;
    } 
    if(!this.changedSaved){
    alert("You didn't saved your informations !");
    }else{
      return true;
    }
  }
 

  ngOnInit(): void {
  /*   this.ShoppingListform = new FormGroup({
       'ingname' : new FormControl(null,Validators.required),
       'ingamount' : new FormControl(null,Validators.required),
     })*/
    this.subscription = this.IngService.Edit.subscribe(
      (index:number)=>{
         this.edittedItemIndex = index;
         this.EditedITem = this.IngService.EditiongIngredient(this.edittedItemIndex);
         this.EditMode = true;
         this.SlForm.setValue({
           'name':this.EditedITem.name,
           'amount':this.EditedITem.amount,
         })
      }
    )
     
    
  }
  OnSubmit(form:NgForm){
   /* console.log(this.ShoppingListform);
   const ingname =  this.ShoppingListform.get('ingname').value;
   const ingamount = this.ShoppingListform.get('ingamount').value;
   const newIng = new Ingredient(ingname,ingamount);
   this.IngService.AddIngredients(newIng);*/
   const value = form.value;
   const newIng = new Ingredient(value.name,value.amount);
   
   if(this.EditMode){
     this.IngService.OnUpdateingredient(this.edittedItemIndex,newIng);
   }
   else{
    this.IngService.AddIngredients(newIng);
    
   }
   
   this.EditMode = false;
   form.reset();
    

  }
  OnClearForm(){
    this.SlForm.reset();
    this.EditMode = false;
  }
OnAddIngredients(){
/*const ingname = this.name.nativeElement.value;
const ingamount = this.amount.nativeElement.value;
const newIng = new Ingredient(ingname,ingamount);
this.IngService.AddIngredients(newIng);
this.changedSaved = true;
this.AllowAdd = true;
//this.router.navigate(['../'],{relativeTo:this.route});
console.log(newIng);*/
  }
  
  OnDelete(){
  this.OnClearForm();
  this.IngService.OnDeleteItem(this.edittedItemIndex);
  

  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}

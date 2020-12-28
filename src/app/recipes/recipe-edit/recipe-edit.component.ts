import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/Service/recipes-manage.service';
import { HttpRequestService } from 'src/app/Service/http-request.service';



@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private recipeSrv:RecipeService,private http:HttpRequestService) { }
EditMode = false;
id:number;
RecipeEdit:FormGroup;
  ngOnInit(): void {
    // retrieving the id
    this.route.params.subscribe(
      (params:Params)=>{
       this.id = +params['id'];
       this.EditMode =  params['id'] != null;
       console.log(this.EditMode);
       this.initForm();
      }
    )
  }

  get IngredientControls(){
    return (this.RecipeEdit.get('ingredients') as FormArray ).controls
  }
  private initForm(){

    let recipeName = "";
    let recipeImagePath = "";
    let recipeDesc = "";
    let recipeinfo = "";
    let recipeingredients = new FormArray([]);

    if(this.EditMode){

      const recipe = this.recipeSrv.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDesc = recipe.description;
      recipeinfo = recipe.desc;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
        recipeingredients.push(new FormGroup({
          'name':new FormControl(ingredient.name),
          'amount':new FormControl(ingredient.amount,Validators.pattern(/^[1-9]+[0-9]*$/)),
        }))
        }
      }
    }
    this.RecipeEdit = new FormGroup({
      'name':new FormControl(recipeName,Validators.required),
      'imagePath':new FormControl(recipeImagePath,Validators.required),
      'desc':new FormControl(recipeinfo,Validators.required),
      'description':new FormControl(recipeDesc,Validators.required),
      'ingredients':recipeingredients,

    })

  }
  OnAddIngredient(){
  (<FormArray>this.RecipeEdit.get('ingredients')).push(
    new FormGroup({
      'name':new FormControl(null,Validators.required),
      'amount': new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    })
  )

  }

  Cancel(){
   this.router.navigate(['../'],{relativeTo:this.route});
  }

  OnSubmit(){
    /*let recipename = this.RecipeEdit.get('name').value;
    let recipeimage = this.RecipeEdit.get('image').value;
    let recipedesc = this.RecipeEdit.get('desc').value;
    let recipeinfo = this.RecipeEdit.get('info').value;
    let recipesingredients = this.RecipeEdit.get('ingredients').value;
    const newRecipe = new Recipe(recipename,recipeinfo,recipeimage,recipesingredients,recipedesc);*/
    if(this.EditMode){
     this.recipeSrv.onUpdateRecipe(this.id,this.RecipeEdit.value);
    }
    else{
      this.recipeSrv.AddNewRecipe(this.RecipeEdit.value);
      this.RecipeEdit.reset();

    }
    this.Cancel();
  }
  OnDelete(index:number){
    (<FormArray>this.RecipeEdit.get('ingredients')).removeAt(index)

  }
}

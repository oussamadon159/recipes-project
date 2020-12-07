import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { MessageComponent } from './../message/message.component';
import { RecipesComponent } from './recipes.component';
import { AuthGuardService } from './../auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const recipesRoutes:Routes = [
{path:'',component:RecipesComponent,
canActivate:[AuthGuardService],
children:[
  {path:'',component:MessageComponent},
  {path:'new',component:RecipeEditComponent},
  {path:':id',component:RecipeDetailsComponent},
  {path:':id/edit',component:RecipeEditComponent},
]},
]



@NgModule({
imports:[RouterModule.forChild(recipesRoutes)],
exports:[RouterModule]

})

export class RecipesRoutingMoudle{}
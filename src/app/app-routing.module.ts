import { AuthGuardService } from './auth/auth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { CanDeactivateGuard } from './shoppinglist/shopping-edit/can-deactivate-guard.service';
import { ShoppingEditComponent } from './shoppinglist/shopping-edit/shopping-edit.component';
import { AuthGuard } from './auth-guard.service';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { MessageComponent } from './message/message.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
{path:'recipes',component:RecipesComponent,
canActivate:[AuthGuardService],
children:[
  {path:'',component:MessageComponent},
  {path:'new',component:RecipeEditComponent},
  {path:':id',component:RecipeDetailsComponent},
  {path:':id/edit',component:RecipeEditComponent},
]},
{path:'Recipe-Book',component:HomeComponent},
{path:'',redirectTo:'Recipe-Book',pathMatch:'full'},
{path:'shopping-list',
canActivate:[AuthGuard],
//canDeactivate:[CanDeactivateGuard],
component:ShoppinglistComponent,children:[
]},
{path:'auth',component:AuthComponent},
{path:'shoppingEdit',component:ShoppingEditComponent},
{path:'not-found',component:ErrorpageComponent,data:{message:'Page not found'}},
{path:'**',redirectTo:'not-found'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

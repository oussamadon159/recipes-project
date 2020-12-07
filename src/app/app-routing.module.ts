import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [

{path:'Recipe-Book',component:HomeComponent},
{path:'',redirectTo:'Recipe-Book',pathMatch:'full'},
{path:'recipes',loadChildren:'./recipes/recipes.module#RecipesModule'},
{path:'shopping-list',loadChildren:'./shoppinglist/shopping-list.module#ShoppingListModule'},
{path:'auth',component:AuthComponent},
{path:'not-found',component:ErrorpageComponent},
//{path:'**',redirectTo:'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { RecipesRoutingMoudle } from './recipes-routing.module';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './../message/message.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    MessageComponent,
    ],
    imports:[RouterModule,SharedModule,ReactiveFormsModule,RecipesRoutingMoudle],
   
})


export class RecipesModule{}
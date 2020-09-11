import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner.component';
import { AuthServiceSign } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';
import { RecipeResolverService } from './recipes/resolver.service';
import {  HttpRequestService } from './Service/http-request.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ModifieText } from './Directives/highlight.directive';
import { IngredientService } from './Service/ingredient.service';
import { RecipeService } from './Service/recipes-manage.service';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { OpenToggleDirective } from './Directives/open-toggle.directive';
import { HeaderComponent } from './Header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shoppinglist/shopping-edit/shopping-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { CanDeactivateGuard } from './shoppinglist/shopping-edit/can-deactivate-guard.service';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { HomeComponent } from './home/home.component';
import {  HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    ShoppinglistComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    HeaderComponent,
    OpenToggleDirective,
    RecipeItemComponent,
    ShoppingEditComponent,
    ModifieText,
    MessageComponent,
    ErrorpageComponent,
    RecipeEditComponent,
    HomeComponent,
    AuthComponent,
    LoadingSpinnerComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
 
  ],
  providers: [RecipeService,
    IngredientService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    HttpRequestService,
    RecipeResolverService,
    AuthServiceSign,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { RecipesModule } from './recipes/recipes.module';
import { AuthModule } from './auth/auth.module';
import { CoreServiceModule } from './core.module';
import { SharedModule } from './shared/shared.module';

import { Store, StoreModule } from'@ngrx/store'
import { ModifieText } from './Directives/highlight.directive';
import { HeaderComponent } from './Header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import {  HttpClientModule  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingListReducer } from './shoppinglist/store/shopping-list.reducer';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModifieText,
    ErrorpageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    StoreModule.forRoot({shoppinglist:ShoppingListReducer}),
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreServiceModule,
    BrowserAnimationsModule,
    AuthModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

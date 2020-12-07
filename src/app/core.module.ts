import { LoggingService } from './LoggingService';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthServiceSign } from './auth/auth.service';
import { RecipeResolverService } from './recipes/resolver.service';
import { HttpRequestService } from './Service/http-request.service';
import { CanDeactivateGuard } from './shoppinglist/shopping-edit/can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { IngredientService } from './Service/ingredient.service';
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RecipeService } from './Service/recipes-manage.service';




@NgModule({
    
    
    providers:[
        RecipeService,
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
        }
    ]

   
})

export class CoreServiceModule {}
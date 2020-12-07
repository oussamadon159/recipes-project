import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations:[AuthComponent],
     imports:[
        SharedModule,
         CommonModule,
         ReactiveFormsModule,
         RouterModule.forChild([
             {path:'auth',component:AuthComponent},
         ])
         
     ],

})

export class AuthModule{

}


import { RouterModule } from '@angular/router';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppinglistComponent } from './shoppinglist.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


@NgModule({

    declarations:[
        ShoppinglistComponent,
        ShoppingEditComponent,
    ],
    imports:[
        SharedModule,
        FormsModule,
        RouterModule.forChild([
            {path:'',component:ShoppinglistComponent,children:[
        ]},
        ])
        
    ]

    
})

export class ShoppingListModule{

}
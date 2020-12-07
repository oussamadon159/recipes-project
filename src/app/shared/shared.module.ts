import { CommonModule } from '@angular/common';
import { OpenToggleDirective } from './open-toggle.directive';
import { PlaceHolderDirective } from './placeholder/placeholder.directive';
import { AlertComponent } from './alert.component';
import { LoadingSpinnerComponent } from './loading-spinner.component';
import { NgModule } from "@angular/core";


@NgModule({
    declarations:[
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceHolderDirective,
        OpenToggleDirective,
    ],
    imports:[
        CommonModule,
    ],
    exports:[
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceHolderDirective,
        OpenToggleDirective,
        CommonModule
    ]

})


export class SharedModule{}
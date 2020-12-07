import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
selector:'[opentoggle]',
})


export class OpenToggleDirective{

@HostBinding('class.open') isOpen  = false;

@HostListener('click') Opentoggle(){
    return this.isOpen = !this.isOpen;
}

}
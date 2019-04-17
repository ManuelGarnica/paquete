import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/*import { CustomerComponent } from './customer.component';*/


import { ControlCarrusel } from './control-carrusel.component';
@NgModule({
 imports:      [ CommonModule ],
 declarations: [ ControlCarrusel ],
 exports:      [ControlCarrusel]
})
export class SharedModuleCarrusel { }
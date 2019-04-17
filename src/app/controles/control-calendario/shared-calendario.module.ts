import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/*import { CustomerComponent } from './customer.component';*/


import { ControlCalendarioCom } from './control-calendario.component';
@NgModule({
 imports:      [ CommonModule ],
 declarations: [ ControlCalendarioCom ],
 exports:      [ControlCalendarioCom]
})
export class SharedModuleCalendarioCom { }
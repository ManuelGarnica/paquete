import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/*import { CustomerComponent } from './customer.component';*/


import { ControlModal } from './control-modal.component';
@NgModule({
 imports:      [ CommonModule ],
 declarations: [ ControlModal ],
 exports:      [ControlModal]
})
export class SharedModuleModal { }
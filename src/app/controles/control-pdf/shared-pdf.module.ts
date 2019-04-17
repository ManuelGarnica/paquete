import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/*import { CustomerComponent } from './customer.component';*/


import { ControlPDF } from './control-pdf.component';
@NgModule({
 imports:      [ CommonModule ],
 declarations: [ ControlPDF ],
 exports:      [ControlPDF]
})
export class SharedModulePDF { }
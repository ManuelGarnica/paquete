import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/*import { CustomerComponent } from './customer.component';*/


import { ControlCatalogo } from './control-catalogo.component';
@NgModule({
 imports:      [ CommonModule ],
 declarations: [ ControlCatalogo ],
 exports:      [ControlCatalogo]
})
export class SharedModuleCatalogo { }
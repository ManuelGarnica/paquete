import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*import { CustomerComponent } from './customer.component';*/
import { PintarPipe } from './renglon.pipe';
import { FilterPipe } from './filtro.pipe';
import { FiltroGeneralPipe } from './filtrogeneral.pipe';

import { ControlTabla } from './control-tabla.component';
@NgModule({
 imports:      [ CommonModule,FormsModule ],
 declarations: [ ControlTabla,PintarPipe,FilterPipe,FiltroGeneralPipe ],
 exports:      [ControlTabla,PintarPipe,FilterPipe,FiltroGeneralPipe]
})
export class SharedModuleTabla { }
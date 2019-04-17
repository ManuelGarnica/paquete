import { TemplateRoutingModule } from './adminlte-routing/adminlte-routing.module';
import { TemplateComponent } from './template-adminlte.component';
import { TemplateHeaderComponent } from './adminlte-header/adminlte-header.component';
import { TemplateLeftSideComponent } from './adminlte-left-side/adminlte-left-side.component';
import { TemplateFooterComponent } from './adminlte-footer/adminlte-footer.component';
import { TemplateControlSidebarComponent } from './adminlte-control-sidebar/adminlte-control-sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosAdminlteService } from './servicios-adminlte.service';

import { TemplateContentModule } from '../content/template-content.module';

@NgModule({
  imports: [
    CommonModule
    ,TemplateRoutingModule
	,TemplateContentModule
  ]
  ,declarations: [
    TemplateComponent
	,TemplateHeaderComponent
	,TemplateLeftSideComponent
	,TemplateFooterComponent
	,TemplateControlSidebarComponent
  ]
  ,providers: [
    ServiciosAdminlteService
  ]
  ,exports: [TemplateComponent]
})
export class TemplateModule { }

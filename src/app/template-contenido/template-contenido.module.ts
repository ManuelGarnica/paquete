import { TemplateRoutingModule } from './contenido-routing/contenido-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateContentModule } from '../content/template-content.module';
import { ServiciosContenidoService } from './servicios-contenido.service';

import { TemplateContenidoComponent } from './template-contenido.component';
import { TemplateContenidoHeaderComponent } from './contenido-header/contenido-header.component';
import { TemplateContenidoButtomComponent } from './contenido-buttom/contenido-buttom.component';
import { SharedModuleModal }  from '../controles/control-modal/shared-modal.module'
@NgModule({
  imports: [
    CommonModule
    ,TemplateRoutingModule
	,TemplateContentModule
	,SharedModuleModal
  ]
  ,declarations: [
    TemplateContenidoComponent
	,TemplateContenidoHeaderComponent
	,TemplateContenidoButtomComponent
	
  ]
  ,providers: [
    ServiciosContenidoService
  ]
  ,exports: [TemplateContenidoComponent]
})
export class TemplateContenidoModule { }

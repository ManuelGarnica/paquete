import { TemplateRoutingModule } from './intranet-routing/intranet-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateContentModule } from '../content/template-content.module';
import { ServiciosIntranetService } from './servicios-intranet.service';

import { TemplateIntranetComponent } from './template-intranet.component';
import { TemplateIntranetHeaderComponent } from './intranet-header/intranet-header.component';
import { TemplateIntranetButtomComponent } from './intranet-buttom/intranet-buttom.component';

@NgModule({
  imports: [
    CommonModule
    ,TemplateRoutingModule
	,TemplateContentModule
  ]
  ,declarations: [
    TemplateIntranetComponent
	,TemplateIntranetHeaderComponent
	,TemplateIntranetButtomComponent
  ]
  ,providers: [
    ServiciosIntranetService
  ]
  ,exports: [TemplateIntranetComponent]
})
export class TemplateIntranetModule { }

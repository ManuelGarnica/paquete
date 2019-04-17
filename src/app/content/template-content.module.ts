import { TemplateContentRoutingModule } from './template-content-routing/template-content-routing.module';
import { TemplateContentComponent } from './template-content.component';
import { NgModule,LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
import { Angular2TokenService } from 'angular2-token';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RecaptchaModule } from 'ng-recaptcha';
import {
		MatButtonModule
		,MatCheckboxModule
		,MatDatepickerModule
		,MatNativeDateModule
		,MatFormFieldModule
		,MatInputModule
		,MAT_DATE_LOCALE
	} from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { BaseChartDirective,ChartsModule } from 'ng2-charts/ng2-charts';

import {InputMaskModule} from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {SpinnerModule} from 'primeng/spinner';


//modulos
import { Globals } from '../globals'

import { ControlCalendarioCom } from '../controles/control-calendario/control-calendario.component';
import { ControlFormulario } from '../controles/control-formulario/control-formulario.component';
import { ControlDatePicker } from '../controles/control-datepicker/control-datepicker.component';
import { ControlMaps } from '../controles/control-maps/control-maps.component';
import { ControlUploadFile } from '../controles/control-uploadfile/control-uploadfile.component';
import { ControlGrafica } from '../controles/control-grafica/control-grafica.component';
import { ControlCaptcha } from '../controles/control-captcha/control-captcha.component';
//Controles compartidos
import { SharedModuleCarrusel } from '../controles/control-carrusel/shared-carrusel.module';
import { SharedModuleCalendarioCom } from '../controles/control-calendario/shared-calendario.module';
import { SharedModuleTabla } from '../controles/control-tabla/shared-tabla.module';
//import { SharedModuleFormulario } from '../controles/control-formulario/shared-formulario.module';
//import { SharedModuleMaps } from '../controles/control-maps/shared-maps.module';
//import { SharedModuleUploadFile } from '../controles/control-uploadfile/shared-uploadfile.module';
//import { SharedModuleGrafica } from '../controles/control-grafica/shared-grafica.module';
//import { SharedModuleDatePicker } from '../controles/control-datepicker/shared-datepicker.module';
import { SharedModulePDF } from '../controles/control-pdf/shared-pdf.module';
import { SharedModuleCatalogo } from '../controles/control-catalogo/shared-catalogo.module';
import { SharedModuleModal }  from '../controles/control-modal/shared-modal.module'

import { ControlUploadFileService } from '../controles/control-uploadfile/control-uploadfile.service';
import {ServiciosService} from './servicios.service';
import {Tuberia} from './tuberia';
import {SafePipe} from './SafePipe';

import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
    ,TemplateContentRoutingModule
    ,HttpModule 
    ,HttpClientModule
	,FormsModule
	,BrowserAnimationsModule
	,ChartsModule
	,RecaptchaModule.forRoot()
	,MatButtonModule
	,MatCheckboxModule
    ,MatDatepickerModule
    ,MatNativeDateModule
	,MatFormFieldModule
	,MatInputModule
	,AgmCoreModule.forRoot({
		apiKey: 'AIzaSyAfmGlpyELf0gY5n-jdOyLq56fhflc10tM'
    })
	,SharedModuleModal
	,SharedModuleCalendarioCom
    ,SharedModuleTabla
  //  ,SharedModuleFormulario
  //  ,SharedModuleDatePicker
   // ,SharedModuleMaps
	//,SharedModuleUploadFile
   // ,SharedModuleGrafica
    ,SharedModulePDF
    ,SharedModuleCatalogo
    ,SharedModuleCarrusel
	,InputMaskModule
	,CalendarModule
	,MultiSelectModule
	,DropdownModule
	,SpinnerModule
  ]
  ,declarations: [
    TemplateContentComponent
	,SafePipe
	,ControlFormulario
	,ControlDatePicker
	,ControlMaps
	,ControlUploadFile
	,ControlGrafica
    ,PrincipalComponent
	,LoginComponent
	,ControlCaptcha
  ]
	,providers: [
		{ provide: LOCALE_ID, useValue: 'es-mx' }
		,{provide: MAT_DATE_LOCALE, useValue: 'es-mx'}
		,ControlUploadFileService
		,ServiciosService
		,Angular2TokenService
		,Tuberia
	]
	,exports: [
		TemplateContentComponent
		,MatButtonModule
		,MatCheckboxModule
	]
})
export class TemplateContentModule { }

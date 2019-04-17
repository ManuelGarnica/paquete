import { TemplateModule } from './template-adminlte/template-adminlte.module';
import { TemplateIntranetModule } from './template-intranet/template-intranet.module';
import { TemplateContenidoModule } from './template-contenido/template-contenido.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from  'ngx-ui-loader'; 
import { NgxUiLoaderConfig, SPINNER_TYPES,  NGX_POSITIONS, PB_DIRECTIONS } from 'ngx-ui-loader';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

 
                       

import { AppComponent } from './app.component';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#E6E6E6',
  fgsColor: '#E6E6E6',
  bgsPosition: NGX_POSITIONS.centerCenter,
  fgsSize: 150,
  overlayColor: 'rgba(180, 175, 175, 0.8)',
  bgsOpacity: 5,
  fgsType: SPINNER_TYPES.circle,
  pbDirection: PB_DIRECTIONS.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
     HttpClientModule
    ,NgProgressModule
    ,BrowserModule
    ,AppRoutingModule
    ,NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
    ,NgxUiLoaderHttpModule
    ,TemplateModule
    ,TemplateIntranetModule
    ,TemplateContenidoModule
    ,BrowserAnimationsModule
   
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
     ],
  bootstrap: [AppComponent]
})
export class AppModule {
	}

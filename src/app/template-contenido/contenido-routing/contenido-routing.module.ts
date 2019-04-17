import { TemplateContenidoComponent } from '../template-contenido.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//modulos

import { PrincipalComponent } from '../../content/principal/principal.component';



@NgModule({
  imports: [
    RouterModule.forChild([
		{
			path: 'contenido'
			,component: TemplateContenidoComponent
			,children: [	
				{ path: '', redirectTo: 'principal', pathMatch: 'full' }
				,{
					path: 'principal'
					,component: PrincipalComponent
				}
			]
		}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TemplateRoutingModule {}

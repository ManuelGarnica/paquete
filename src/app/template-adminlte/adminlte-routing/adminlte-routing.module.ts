import { TemplateComponent } from '../template-adminlte.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TemplateContentComponent } from '../../content/template-content.component';

//modulos
import { PrincipalComponent } from '../../content/principal/principal.component';

@NgModule({
  imports: [
    RouterModule.forChild([
		//{ path: '**', redirectTo: 'administrador/index' }
		//,
		{
			path: 'adminlte'
			,component: TemplateComponent
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

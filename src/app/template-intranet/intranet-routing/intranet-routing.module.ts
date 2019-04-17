import { TemplateIntranetComponent } from '../template-intranet.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//modulos

import { PrincipalComponent } from '../../content/principal/principal.component';
import { LoginComponent } from '../../content/login/login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
		{
			path: 'intranet'
			,component: TemplateIntranetComponent
			,children: [	
				{ path: '', redirectTo: 'principal', pathMatch: 'full' }
				,{
					path: 'principal'
					,component: PrincipalComponent
				}
				,{
					path: 'login'
					,component: LoginComponent
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

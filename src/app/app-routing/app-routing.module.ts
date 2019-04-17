import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//vistas sin plantilla

@NgModule({
  imports: [
    RouterModule.forRoot([
	{ path: '', redirectTo: 'intranet', pathMatch: 'full' }
/*
    ,{
        path: 'rol'
        ,component: DirectorioRolSupervisores
	}
*/
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }

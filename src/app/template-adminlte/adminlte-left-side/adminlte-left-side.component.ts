import { Component, OnInit } from '@angular/core';
import { Tuberia } from '../../content/tuberia';
import { Router } from '@angular/router';
import { ServiciosAdminlteService } from '../servicios-adminlte.service';
import { Globals } from '../../globals';




@Component({
  selector: 'app-adminlte-left-side'
  ,templateUrl: './adminlte-left-side.component.html'
  ,styleUrls: ['./adminlte-left-side.component.css']
})
export class TemplateLeftSideComponent implements OnInit {
	urlImagenes : string ="";
	configuracion : any ={};
	subscription : any;
	
	constructor(
		private tuberia: Tuberia
		,private router: Router
		,private _serviciosAdminlte: ServiciosAdminlteService
	) {
		this.urlImagenes=Globals.ipRecursosPlantilla;
	}

	ngOnInit() {
//		this.configuracion=Tuberia.contenidomenu_Default;
		this.tuberia.menuObservable.subscribe(configuracion => this.configuracion = configuracion)
		this._serviciosAdminlte.obtenerMenuModulo(Tuberia.datossesion.sistema['cve'],1).subscribe(
			result => {
				this.tuberia.cambiarMenu(result['menumodulo']);
			}
			,error => {
				console.log(<any>error);
			}
		);
//		this.tuberia.menuObservable.subscribe(configuracion => this.configuracion = configuracion)
	}
	ngOnDestroy() {
	}

}

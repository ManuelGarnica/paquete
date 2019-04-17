import { Component, OnInit } from '@angular/core';
import { ServiciosAdminlteService } from '../servicios-adminlte.service';
import { Router } from '@angular/router';
import { Globals } from '../../globals';
@Component({
  selector: 'app-adminlte-header',
  templateUrl: './adminlte-header.component.html',
  styleUrls: ['./adminlte-header.component.css']
})
export class TemplateHeaderComponent implements OnInit {
	urlImagenes : string ="";

	constructor(
		private _serviciosService: ServiciosAdminlteService
		,private router: Router
	){
		this.urlImagenes=Globals.ipRecursosPlantilla;
	}

	ngOnInit() {
	}
	logout(){
		this._serviciosService.logout().subscribe(
			result => {
				  this.router.navigate(["/intranet/login"]);
			console.log(result);
			},
			error => {
				console.log(<any>error);
			}
		);
			
	}
}

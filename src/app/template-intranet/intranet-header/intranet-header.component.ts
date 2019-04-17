import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Globals } from '../../globals';
import { Router } from '@angular/router';
//
import { NgModel } from '@angular/forms';
import { Tuberia } from '../../content/tuberia';
import { ServiciosIntranetService } from '../servicios-intranet.service';

@Component({
  selector: 'template-intranet-header',
  templateUrl: './intranet-header.component.html',
  styleUrls: ['./intranet-header.component.css']
})
export class TemplateIntranetHeaderComponent implements OnInit {
	urlImagenes : string ="";
	mostrarmenu : any={};
	configuracion : any ={};
	tamaniosubmenu : any = "1";
	
	constructor(
		private tuberia: Tuberia
		,private router: Router
		,private _serviciosService: ServiciosIntranetService
	){
		this.urlImagenes=Globals.ipRecursosPlantilla;
	}		
	ngOnInit(){
		this.tuberia.sistemasObservable.subscribe(configuracion =>{
			for(let submenu in configuracion['menuprincipal']){
				this.mostrarmenu[submenu]=false;
			}
			if(configuracion['menuprincipal']!==undefined){
				this.tamaniosubmenu=String(Math.floor(12/(Object.keys(configuracion['menuprincipal']).length)));
			}
			this.configuracion = configuracion
		});
	}
	
	irAlLink(ruta){
		window.open(ruta['link'],(ruta['externo']===null||ruta['externo']==='' ? '_self':'_blank'));
	}
	
	visualizarMenu(identificador){
		let nuevovalor=!this.mostrarmenu[identificador];
		for(let submenu in this.configuracion['menuprincipal']){
			this.mostrarmenu[submenu]=false;
		}
		this.mostrarmenu[identificador]=nuevovalor;
	}
	
	objectKeys(){
		return Object.keys(this.configuracion['menuprincipal']);
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

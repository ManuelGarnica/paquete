import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Tuberia } from '../content/tuberia';
import { ServiciosIntranetService } from './servicios-intranet.service';

@Component({
  selector: 'template-intranet',
  templateUrl: './template-intranet.component.html',
  styleUrls: ['./template-intranet.component.css']
})
export class TemplateIntranetComponent implements OnInit, OnDestroy {
	configuracion:any={};
  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

	constructor(
		private tuberia: Tuberia
		,private router: Router
		,private _serviciosIntranet: ServiciosIntranetService
	){
	}

	ngOnInit() {
		// add the the body classes
		this.body.classList.add('skin-blue');
		this.body.classList.add('sidebar-mini');
//		alert("Inicio el ocmponente principal");
//		this.router.navigate(['index']);
		console.log("Inicio el ocmponente principal");
		this.tuberia.menuObservable.subscribe(configuracion =>{
			this.configuracion = configuracion
		});
		this._serviciosIntranet.obtenerSistemas().subscribe(
			result => {
				let menufinal={};
				for(let opcion in result['sistemas']){
					if(menufinal[result['sistemas'][opcion]['cveclasificacion']]===undefined){
						menufinal[result['sistemas'][opcion]['cveclasificacion']]={};
						menufinal[result['sistemas'][opcion]['cveclasificacion']]['nombre']=result['sistemas'][opcion]['nombreclasificacion'];
						menufinal[result['sistemas'][opcion]['cveclasificacion']]['contenido']=[];
					}
					let nuevaopcion={
						"imagen":result['sistemas'][opcion]['imagen']
						,"imagen_seleccionada":result['sistemas'][opcion]['imagen_seleccionada']
						,"link":result['sistemas'][opcion]['link']
						,"titulo":result['sistemas'][opcion]['titulo']
						,"externo":result['sistemas'][opcion]['externo']
					};
					menufinal[result['sistemas'][opcion]['cveclasificacion']]['contenido'].push(nuevaopcion);
				}
				this.tuberia.cambiarSistemas(menufinal);
			},
			error => {
				console.log(<any>error);
			}
		);
		this._serviciosIntranet.verDatosDelSistema(Tuberia.datossesion.sistema['cve']).subscribe(
			result => {
				this.tuberia.cambiarDatosSistema(result['datossistema']);
			},
			error => {
				console.log(<any>error);
			}
		);
		this._serviciosIntranet.obtenerMenuNavegacion().subscribe(
			result => {
				this.tuberia.cambiarNavegacion(result['menunavegacion']);
			},
			error => {
				console.log(<any>error);
			}
		);


	}

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }

}

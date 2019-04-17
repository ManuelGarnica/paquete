import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Tuberia } from '../content/tuberia';
import { ServiciosContenidoService } from './servicios-contenido.service';
import { Globals } from '../globals';

@Component({
  selector: 'template-contenido',
  templateUrl: './template-contenido.component.html',
  styleUrls: ['./template-contenido.component.css']
})
export class TemplateContenidoComponent implements OnInit, OnDestroy {
	mostrarse:any=false;
	parametrosmodal : any ={}; 
	
	renglon:number=-1;
	urlImagenes : string ="";
	bodyClasses = 'skin-blue sidebar-mini';
	body: HTMLBodyElement = document.getElementsByTagName('body')[0];
	configuracion : any ={};
	
	
	
	constructor(
		private tuberia: Tuberia
		,private router: Router
		,private _serviciosContenido: ServiciosContenidoService
	){
		this.urlImagenes=Globals.ipRecursosPlantilla;
	}

	ngOnInit() {
		// add the the body classes
		this.body.classList.add('skin-blue');
		this.body.classList.add('sidebar-mini');
//		alert("Inicio el ocmponente principal");
//		this.router.navigate(['index']);
		this.tuberia.menuObservable.subscribe(configuracion =>{
			this.configuracion = configuracion
		});
		this._serviciosContenido.obtenerNoticias().subscribe(
			result => {
				
				this.tuberia.cambiarNoticias(result['noticias']);
			},
			error => {
				console.log(<any>error);
			}
		);
		this._serviciosContenido.obtenerComunicadosRecientes().subscribe(
			result => {
				this.tuberia.cambiarComunicadosRecientes(result['comunicados']);
			},
			error => {
				console.log(<any>error);
			}
		);
		this._serviciosContenido.obtenerSistemas().subscribe(
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
		this._serviciosContenido.obtenerMenuModulo(Tuberia.datossesion.sistema['cve'],1).subscribe(
			result => {
				this.tuberia.cambiarMenu(result['menumodulo']);
			},
			error => {
				console.log(<any>error);
			}
		);
		this._serviciosContenido.verDatosDelSistema(Tuberia.datossesion.sistema['cve']).subscribe(
			result => {
				this.tuberia.cambiarDatosSistema(result['datossistema']);
			},
			error => {
				console.log(<any>error);
			}
		);
		this._serviciosContenido.obtenerMenuNavegacion().subscribe(
			result => {
				this.tuberia.cambiarNavegacion(result['menunavegacion']);
			},
			error => {
				console.log(<any>error);
			}
		);

		console.log("Inicio el ocmponente principal");

	}

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }
	validarSalto(salto){
		
		if(salto==-1){
			this.renglon=0;
			return false;
		}else if((this.renglon+salto)==12){
			this.renglon=0;
			return true;
		}else if((this.renglon+salto)!=12){
			this.renglon+=salto;
			return false;
		}
	}
	
	ocultarmodal($event){
		this.mostrarse=false;
	}
	clicklink($event){

		
		this._serviciosContenido.verArchivo($event['archivo']+'.'+$event['extension']).subscribe(
			result => {

				this.mostrarse=true;
				this.parametrosmodal=result;
			},
			error => {
				console.log(<any>error);
			}
		);
	}
}

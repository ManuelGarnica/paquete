import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
//import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Globals } from '../globals';

@Injectable()
export class Tuberia {
///////////////variables de los componentes
private _paciente : any = {datos:{},expediente:{}};
paciente(){
	return this._paciente;
}

private pacienteBehaviorSubject = new BehaviorSubject<any>(this._paciente);
	pacienteObservable = this.pacienteBehaviorSubject.asObservable();

	cambiarDatosPaciente(datosnuevos: any) {
		this._paciente['datos']=datosnuevos;
		this._paciente['expediente']={};
		this.pacienteBehaviorSubject.next(this._paciente);
	}

////////////////////// Detectar cambio en el menu

//////////////////////

	
	//variables del template

	static datossesion:any={
		contenido:{
			noticias:[
			]
			,comunicadosrecientes:[
			]
		}
		,menunavegacion:[
		]
		,menuprincipal:{
		}
		,menudelmodulo:{
			nombre:"Menú de Calidad y Seguridad del Paciente"
			,contenido:[
			]
		}
		,usuario:{
			nombre:"Usuario"
			,titulo:"CC"
			,abreviacion:"usr"
			,foto:""
		}
		,sistema:{
			cve:Globals.cvesistema
			,inicio: {
				"imagen":"assets/img/menu/homeblue.png"
				,"imagen_seleccionada":"assets/img/menu/homeblue_Gris.png"
				,"titulo":"CALIDAD Y SEGURIDAD DEL PACIENTE"
			}
			,retorno: {
				"imagen":"assets/img/menu/Registro_de_Incidentes_iCono_Salud_Color.png"
				,"imagen_seleccionada":"assets/img/menu/Registro_de_Incidentes_iCono_Salud_Gris.png"
				,"link":"http://intranet.isalud-conval.org/"
				,"titulo":"Regresar a intranet"
			}
		}
	};

////////////////////// Detectar cambio en el menu
private menuBehaviorSubject = new BehaviorSubject<any>(Tuberia.datossesion);
  menuObservable = this.menuBehaviorSubject.asObservable();

  cambiarMenu(configuracionNueva: any) {
	let estructuraNueva = Tuberia.datossesion;
	estructuraNueva['menudelmodulo']['contenido']=configuracionNueva;
    this.menuBehaviorSubject.next(estructuraNueva);
  }
////////////////////// Detectar cambio en las noticias
private noticiasBehaviorSubject = new BehaviorSubject<any>(Tuberia.datossesion);
  noticiasObservable = this.noticiasBehaviorSubject.asObservable();

  cambiarNoticias(configuracionNueva: any) {
	let estructuraNueva = Tuberia.datossesion;
	estructuraNueva['contenido']['noticias']=configuracionNueva;
    this.noticiasBehaviorSubject.next(estructuraNueva);
  }
////////////////////// Detectar cambio en los comunicados recientes
private comunicadosRecientesBehaviorSubject = new BehaviorSubject<any>(Tuberia.datossesion);
  comunicadosRecientesObservable = this.comunicadosRecientesBehaviorSubject.asObservable();

  cambiarComunicadosRecientes(configuracionNueva: any) {
	let estructuraNueva = Tuberia.datossesion;
	estructuraNueva['contenido']['comunicadosrecientes']=configuracionNueva;
    this.comunicadosRecientesBehaviorSubject.next(estructuraNueva);
  }
////////////////////// Detectar cambio en los Sistemas
private sistemasBehaviorSubject = new BehaviorSubject<any>(Tuberia.datossesion);
  sistemasObservable = this.sistemasBehaviorSubject.asObservable();

  cambiarSistemas(configuracionNueva: any) {
	let estructuraNueva = Tuberia.datossesion;
	estructuraNueva['menuprincipal']=configuracionNueva;
    this.sistemasBehaviorSubject.next(estructuraNueva);
  }
////////////////////// Detectar cambio en los datos del sistema
private datosSistemaBehaviorSubject = new BehaviorSubject<any>(Tuberia.datossesion);
  datosSistemaObservable = this.datosSistemaBehaviorSubject.asObservable();

  cambiarDatosSistema(configuracionNueva: any) {
	let estructuraNueva = Tuberia.datossesion;
	estructuraNueva['sistema']['nombre']=configuracionNueva['nombre'];
	estructuraNueva['sistema']['logoModulo']=configuracionNueva['logoModulo'];
	estructuraNueva['sistema']['inicio']['link']=configuracionNueva['link'];
    this.datosSistemaBehaviorSubject.next(estructuraNueva);
  }
////////////////////// Detectar cambio en los datos de navegacion
private navegacionBehaviorSubject = new BehaviorSubject<any>(Tuberia.datossesion);
  navegacionObservable = this.navegacionBehaviorSubject.asObservable();

  cambiarNavegacion(configuracionNueva: any) {
	let estructuraNueva = Tuberia.datossesion;
	estructuraNueva['menunavegacion']=configuracionNueva;
    this.datosSistemaBehaviorSubject.next(estructuraNueva);
  }
//////////////////////
  constructor() { }

}
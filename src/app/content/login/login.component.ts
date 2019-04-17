import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Title } from '@angular/platform-browser';
import { Globals } from '../../globals';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { Tuberia } from '../tuberia';


// Variable in assets/js/scripts.js file

@Component({
  selector: 'app-login'
  ,templateUrl: './login.component.html'
  ,styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	urlImagenes : string ="";
	datoslogin : any ={};
	configuracion : any ={};

	formularioLogin : any = {
		identificador: "id"
		,datoscampos : {
			
		}
		,botones : [
			{
				label:"Ingresar"
				,nombre :  "ingresar"
				,funcion : "funcionbuscar"
				,alineacion : '5'
				,backgroundcolor: '#44B7A7'
				,color: 'white'
			}
		]
		,campos : [
			{
				nombre: "usuario"
				,label: "Usuario:"
				,placeholder: "Ingrese su usuario"
				,tipo:"text"
				,clase:""
				,tamanio:"12"
				,tamaniolabel:"4"
				,tamanioinput:"8"
			}
			,{
				nombre: "contrasenia"
				,label: "Contraseña:"
				,placeholder: "Ingrese su contraseña"
				,tipo:"password"
				,clase:""
				,tamanio:"12"
				,tamaniolabel:"4"
				,tamanioinput:"8"
			}
		]
	};
	
	constructor(
		private tuberia: Tuberia
		,private router:Router
		,private _serviciosService: ServiciosService
		,private titleService: Title
	) {
		this.urlImagenes=Globals.ipRecursosPlantilla;
	}

	ngOnInit() {
		this.tuberia.menuObservable.subscribe(configuracion =>{
			this.configuracion = configuracion
		});
		this._serviciosService.verificarSesion().subscribe(
			result => {
				if(result[Globals.nombretoken]!==undefined&&result[Globals.nombretoken]!==null){
					this.enviarAInicio();
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}
	ingresar(usuario,contrasenia){
		this._serviciosService.login(usuario,contrasenia).subscribe(
			result => {
				console.log(result);
				if(result[Globals.nombretoken]!==undefined&&result[Globals.nombretoken]!==null){
					this.enviarAInicio();
				}else{
					alert("Usuario o contraseña incorrecta");
				}
			},
			error => {
				console.log(<any>error);
			}
		);

	}
	
	enviarAInicio(){
		this._serviciosService.verDatosDelSistema(Tuberia.datossesion.sistema['cve']).subscribe(
			result => {
				console.log("enviarAInicio");
				console.log(result);
				this.tuberia.cambiarDatosSistema(result['datossistema']);
				if(result['datossistema']['inicio']!==null)
					this.router.navigate([result['datossistema']['inicio']]);
				else
					alert("Este usuario inicio sesión pero no tiene privilegios en este módulo.");
			},
			error => {
				console.log(<any>error);
			}
		);
	}

  	botonformulario($event){
		if($event.nombre==='ingresar' || ($event.code==='Enter')){
			this.ingresar(
				this.datoslogin['usuario']
				,this.datoslogin['contrasenia']
			);
		}
	}
}

import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Title } from '@angular/platform-browser';
import { Globals } from '../../globals';
import { Router } from '@angular/router';

import { NgModel } from '@angular/forms';


// Variable in assets/js/scripts.js file

@Component({
  selector: 'app-principal'
  ,templateUrl: './principal.component.html'
  ,styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
	datosBusquedaPacientes : any={};
	formularioPacientes  : any = {
		identificador: "formulariobusquedapaciente"
		,botones : [
			{
				label:"Nuevo"
				,nombre :  "btnnuevopaciente"
				,backgroundcolor : "#3c8dbc"
				,color : "white"
				,alineacion: "5"
			},{
				label:"Buscar"
				,nombre :  "btnbuscarpaciente"
				,backgroundcolor : "#3c8dbc"
				,color : "white"
				,alineacion: "7"
			}
		]
		,campos : [
			{
				nombre: "claveAfiliacion"
				,label: " No. afiliación :"
				,placeholder: "Afilicación"
				,tipo:"text"
				,clase:""
				,tamanio:"4"
				,tamaniolabel:"6"
				,tamanioinput:"6"
			},{
				nombre: ""
				,label: " "
				,tipo:"label"
				,clase:""
				,tamanio:"8"
				,tamaniolabel:"6"
				,tamanioinput:"6"
			}//Espacio
			,{
				nombre: ""
				,label: " "
				,tipo:"label"
				,clase:""
				,tamanio:"12"
				,tamaniolabel:"6"
				,tamanioinput:"6"
			}
			,{
				nombre: "nombres"
				,label: "Nombre"
				,placeholder: "Ingrese el nombre"
				,tipo:"text"
				,clase:""
				,tamanio:"4"
				,tamaniolabel:"6"
				,tamanioinput:"6"
			}
			,{
				nombre: "primerApellido"
				,label: " Primer apellido"
				,placeholder: "Ingrese el primer apellido"
				,tipo:"text"
				,clase:""
				,tamanio:"4"
				,tamaniolabel:"6"
				,tamanioinput:"6"
			}
			,{
				nombre: "segundoApellido"
				,label: "Segundo Apellido"
				,placeholder: "Ingrese el segundo apellido"
				,tipo:"text"
				,clase:""
				,tamanio:"4"
				,tamaniolabel:"6"
				,tamanioinput:"6"
			}//Espacio
			,{
				nombre: ""
				,label: " "
				,tipo:"label"
				,clase:""
				,tamanio:"12"
				,tamaniolabel:"6"
				,tamanioinput:"6"
			},
			{	
				
				nombre: "fechaNacimiento"
				,label: "Fecha de Nacimiento"
				,placeholder: "Ingrese la fecha de nacimiento(dd/mm/yyyy)"
				,tipo:"date"
				,tipoCalendario:'maxdatetoday'
				,obligatorio:true
				,clase:""
				,tamanio:"12"
				,tamaniolabel:"3"
				,tamanioinput:"5"

			}
			
			,{
				nombre: ""
				,label: " "
				,tipo:"label"
				,clase:""
				,tamanio:"6"
				,tamaniolabel:"12"
				,tamanioinput:"12"
			}
		]
	};
	constructor(
		private _serviciosService: ServiciosService
		,private router:Router
		,private titleService: Title
	) {
	}

	ngOnInit() {
	}
	clickFormulario($event){}
}

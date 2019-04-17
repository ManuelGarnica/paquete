import { Component, OnInit, Input  } from '@angular/core';
import { OnChanges,SimpleChanges } from '@angular/core';
import { Output,EventEmitter  } from '@angular/core';
import { Globals } from '../../globals';
import { NgModel } from '@angular/forms';


// Variable in assets/js/scripts.js file

@Component({
  selector: 'control-calendario',
  templateUrl: './control-calendario.component.html',
  styleUrls: ['./control-calendario.component.css']
})
export class ControlCalendarioCom implements OnInit {
		nombresMeses : string[]  = [
			"Enero", "Febrero", "Marzo","Abril", "Mayo"
			, "Junio", "Julio","Agosto", "Septiembre"
			, "Octubre","Noviembre", "Diciembre"
		];
		nombresDias = [
			'Domingo', 'Lunes', 'Martes'
			, 'Miercoles', 'Jueves', 'Viernes', 'Sabado'
		];
		mes : number;
		anio : number;
		calendarioMostrado : any[]=[];
		semanasMostradas : number=6;
		diasMostrados : number=7;
		nombreMes : String;
		@Input() titulocalendario: String="Calendario"; 
		@Input() diadelmesmostrado: Date= new Date(); 
		@Output() clickdia = new EventEmitter();
		@Output() cambiodemes = new EventEmitter();

		@Input() diasencolor : any[]=[];


	constructor() {
		let hoy = new Date(this.diadelmesmostrado);
		this.mes = hoy.getMonth();
		this.anio = hoy.getFullYear();
	}
	ngOnChanges(changes: SimpleChanges) {
		this.pintarCalendario();
	  }

	aumentarDisminuirMes(numeromeses){
		this.mes = this.mes + numeromeses;
		this.pintarCalendario();
		let mes={"anio":this.anio,"mes":(this.mes+1===13?1:this.mes+1)};
		this.cambiodemes.emit(mes);
	}
	pintarCalendario(){
		let primerdiames  = new Date(this.anio, this.mes, 1, 0, 0, 0, 0);
		this.nombreMes = this.nombresMeses[primerdiames.getMonth()];
		this.calendarioMostrado = [];
		let primerdiamostrado  = new Date(primerdiames.getTime()-(primerdiames.getDay()*24*60*60*1000));
		let primermes = "0"+((primerdiames.getMonth()+1)===13?1:primerdiames.getMonth()+1).toString();
		
		let primeranio = primerdiames.getFullYear().toString();

		let claveprimer = primeranio+primermes.substring(primermes.length-2);
	
		let semanamostrada = [];
		for(let semanaindex=0;semanaindex<this.semanasMostradas;semanaindex++){
			for(let diaindex=0;diaindex<this.diasMostrados;diaindex++){
				let diamostrado = new Date(primerdiamostrado.getTime()+((semanaindex*this.diasMostrados*24*60*60*1000)+(diaindex*24*60*60*1000)));
				let cvedia = "0"+diamostrado.getDate().toString();
				let cvemes = "0"+((diamostrado.getMonth()+1)===13?1:diamostrado.getMonth()+1).toString();
				let cveanio = diamostrado.getFullYear().toString();
				let clavemostrado = cveanio+cvemes.substring(cvemes.length-2)+cvedia.substring(cvedia.length-2);
				let colorback = clavemostrado.toString().substring(0,6)===claveprimer?this.diasencolor[clavemostrado.toString()]:"gray";
				semanamostrada.push(
					{
						"cve":clavemostrado
						,"label":diamostrado.getDate()
						,"background":colorback
					}
				);
			}
			this.calendarioMostrado.push(semanamostrada);
			semanamostrada = [];
		}
	}
	ngOnInit() {
		this.pintarCalendario();
	}
	dayClick(clave){
		this.clickdia.emit(clave);
	}
}

import { Component, OnInit, Input, Inject   } from '@angular/core';
import { OnChanges,SimpleChanges } from '@angular/core';
import { Output,EventEmitter  } from '@angular/core';
import { Globals } from '../../globals';
import { NgModel } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TipoCalendario } from './tipocalendario';

@Component({
  selector: 'control-datepicker'
  ,templateUrl: './control-datepicker.component.html'
  ,styleUrls: ['./control-datepicker.component.css']
})
export class ControlDatePicker implements OnInit  {
	public static _DIA : string = 'dia';
	get static_DIA() {return ControlDatePicker._DIA;}
	public static _ANIO : string = 'anio';
	get static_ANIO() {return ControlDatePicker._ANIO;}
	
	@Input() startDate : any = new Date();
	@Input() tipo:string='dia';
	@Input() placeholder:string='';
	@Input() obligatorio:string='';
	@Input() diamostrado:string='';
	diavisualizado:any=new Date();
	diavisualizadorango:any=new Date();
	diavisualizadoarray:any[];
	@Output() cambioDia = new EventEmitter(true);
	dia : string = '' ;
	public tipoCalendarioDefault= this.tipo;
	es: any = {
            //date
            closeText: "Cerrar",
            prevText: "<Ant",
            nextText: "Sig>",
            currentText: "Hoy",
            monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio",
            "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
            monthNamesShort: [ "ene","feb","mar","abr","may","jun",
            "jul","ago","sep","oct","nov","dic" ],
            dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
            dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
            dayNamesMin: [ "D","L","M","X","J","V","S" ],
            weekHeader: "Sm",
           // dateFormat: "dd/mm/yyyy",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: "" ,

            //time
            timeOnlyTitle: 'Elegir una hora',
            timeText: 'Hora',
            hourText: 'Horas',
            minuteText: 'Minutos',
            secondText: 'Segundos',
            millisecText: 'Milisegundos',
            microsecText: 'Microsegundos',
            timezoneText: 'Uso horario',
            timeFormat: 'HH:mm',
            timeSuffix: '',
            amNames: ['a.m.', 'AM', 'A'],
            pmNames: ['p.m.', 'PM', 'P'],
        };
	//Segundo control-datepicker
	
    constructor() { }
	ngOnChanges(changes: SimpleChanges){
		if(this.tipo===TipoCalendario._CALENDAR){
			if(this.obligatorio){
				this.cambiofecha(this.diavisualizado);		
			}
		}else if(this.tipo===TipoCalendario._MAXDATETODAY){
			/*console.log('changes.diamostrado');
			console.log(changes.diamostrado);*/
			if(this.obligatorio && changes.diamostrado.firstChange==true){
				//this.formatofechapcalendar(changes.diamostrado.currentValue));
				this.cambiofecha(this.diavisualizado);		
			}
			if(
				(
					changes.diamostrado.firstChange==true 
					&& changes.diamostrado.currentValue!==""
				) 
				|| 
				(
					changes.diamostrado.firstChange==false 
					&& changes.diamostrado.currentValue!==""
					&& changes.diamostrado.previousValue!=="" )
				)
				{
				
				this.formatofechapcalendar(changes.diamostrado.currentValue);
			}
		}else if(this.tipo===TipoCalendario._HORA){
			this.cambiohora(this.diavisualizado);
		}
		else if (this.tipo===TipoCalendario._DIA && this.tipo===TipoCalendario._ANIO ){
			if(changes['diamostrado']!==undefined){
				this.formatoVista(changes.diamostrado.currentValue);
			}
		}
    }
	ngOnInit(){
		console.log(this.tipoCalendarioDefault);
	}
	padLeft(text:string, padChar:string, size:number): string {
		return (String(padChar).repeat(size) + text).substr( (size * -1), size) ;
	}
	formatofechapcalendar(fecha){
		let formatoVista='';
		let stringdia = fecha.substring(8,10);
		let stringmes = fecha.substring(5,7);
		let stringanio = fecha.substring(0,4);
		formatoVista = stringdia + '-' + stringmes + '-' + stringanio;
		this.diavisualizado = new Date(stringanio, stringmes - 1, stringdia, 0, 0, 0);
		return formatoVista;
		
	}
	cambiofecha($event){
		let d = new Date($event);
		let stringdia = "00"+d.getDate();
		let stringmes = "00"+((d.getMonth()+1)==13?1:(d.getMonth()+1)).toString();
		let stringanio = d.getFullYear();
		this.dia=stringanio+'-'+stringmes.substring(stringmes.length-2)+'-'+stringdia.substring(stringdia.length-2);
		this.cambioDia.emit(this.dia);
	}
	cambiohora($event){
		let d = new Date($event);
		let stringhora = "00"+d.getHours();
		let stringminuto = "00"+d.getMinutes();
		this.dia=stringhora.substring(stringhora.length-2)+':'+stringminuto.substring(stringminuto.length-2);
		this.cambioDia.emit(this.dia);
	}
	formatoVista(fecha){
		let formatoVista='';
		let stringdia = fecha.substring(8,10);
		let stringmes = fecha.substring(5,7);
		let stringanio = fecha.substring(0,4);
		formatoVista = stringdia + '/' + stringmes + '/' + stringanio;
		this.diavisualizado = new Date(stringanio, stringmes - 1, stringdia, 0, 0, 0);
		return formatoVista;
	}
	formatofecha($event){
		let d = new Date($event);
		let stringdia = "00"+d.getDate();
		let stringmes = "00"+((d.getMonth()+1)==13?1:(d.getMonth()+1)).toString();
		let stringanio = d.getFullYear();
		let dia=stringanio+'-'+stringmes.substring(stringmes.length-2)+'-'+stringdia.substring(stringdia.length-2);
		return dia;
	}
	cambiofechap($event){
			this.cambiofecha(this.diavisualizado);
	}
	cambiofecharango($event){
		for(let fecha in this.diavisualizadorango){
			if(this.diavisualizadorango[fecha]!==null){
				this.diavisualizadorango[fecha]=this.formatofecha(this.diavisualizadorango[fecha]);
			}
		}
		this.cambioDia.emit(this.diavisualizadorango);
	}
	cambiofechamultiple($event){
		for(let fecha in this.diavisualizadoarray){
			if(this.diavisualizadoarray[fecha]!==null){
				this.diavisualizadoarray[fecha]=this.formatofecha(this.diavisualizadoarray[fecha]);
			}
		}
		this.cambioDia.emit(this.diavisualizadoarray);
	}
	seleccionahora($event){
		this.cambiohora(this.diavisualizado);
	}


}
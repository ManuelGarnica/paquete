import { Injectable } from '@angular/core';

@Injectable()
export class TipoCalendario {
	public static _DIA : string = 'dia';
	public static _ANIO : string = 'anio';
	public static _CALENDAR : string = 'calendario'; // permite seleccionar cualquier fecha hasta el 2039
	public static _MAXDATETODAY : string = 'maxdatetoday'; //solo permite selecionar antes del dia acual
	public static _RANGO : string = 'rango'; //permite seleccionar cualquier  rango fecha hasta el 2039
	public static _MULTIPLE : string = 'multiple';//permite seleccionar multiples fecha hasta el 2039
	public static _HORA : string = 'hora';//permite seleccionar  hora 
}  

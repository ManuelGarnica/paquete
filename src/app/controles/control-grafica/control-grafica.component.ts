import { Component, OnInit, Input, Inject ,ViewChild } from '@angular/core';
import { OnChanges,SimpleChanges } from '@angular/core';
import { Output,EventEmitter  } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TipoGrafica } from './tipografica';

// Variable in assets/js/scripts.js file
@Component({
  selector: 'control-grafica'
  ,templateUrl: './control-grafica.component.html'
  ,styleUrls: ['./control-grafica.component.css']
})
export class ControlGrafica implements OnInit {
	mostrarGrafica : any=true;
	/*cambia el valor sobre el mismo numero de series*/
	constructor() {
   }
  ngOnInit() {
	  this.llenarGrafica();
  }
  // lineChart
	@Input() contenido: any={};
  

  public lineChartColorsDefault:any = { 
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    };
  public tipoGraficaDefault : string = TipoGrafica.barras;

  
  public lineChartData:Array<any> = [];
  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true
	,scales: {}
  };
//        yAxes: [{id: 'y-axis-1', type: 'linear', position: 'left', ticks: {min: 0, max:100}}]
  public lineChartColors:Array<any> = [];
  
  public tipoGrafica : string = TipoGrafica.barras;
  public lineChartLegend:boolean = true;
  
	ngOnChanges(changes: SimpleChanges) {
		this.mostrarGrafica=false;
		this.llenarGrafica();
		setTimeout(()=>{this.mostrarGrafica = true}, 0)
	}

	// events
	public chartClicked(e:any):void {
	}

	public chartHovered(e:any):void {
	}
	public llenarGrafica(){
		this.tipoGrafica= TipoGrafica.barras;
		this.lineChartLabels = [];
		this.lineChartOptions['scales'] = [];
		this.lineChartData = [];
		this.lineChartColors = [];
		
		let contenido = this.contenido.contenido;
		let lineChartData = [];
		let lineChartColors = [];
		for(let grafica in contenido){
			let graficalocal : any = {
				label:contenido[grafica].label
				,data:[]
			};
			for(let dato in contenido[grafica].datos){
				graficalocal.data.push(contenido[grafica].datos[dato][contenido[grafica]['datografica']]);
			}
			lineChartColors.push(contenido[grafica]['estilo']===undefined?this.lineChartColorsDefault:contenido[grafica]['estilo']);
			lineChartData.push(graficalocal);
		}
		this.tipoGrafica= this.contenido['tipoGrafico']===undefined?this.tipoGraficaDefault:this.contenido['tipoGrafico'];
		this.lineChartLabels= this.contenido['etiquetasy'];
		this.lineChartOptions['scales'] = this.contenido['formatoeje']===undefined?{}:this.contenido['formatoeje'];
		this.lineChartColors=lineChartColors;
		this.lineChartData=lineChartData;
	}

	
}
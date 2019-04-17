import { Component, OnInit, Input, Inject  } from '@angular/core';
import { OnChanges,SimpleChanges } from '@angular/core';
import { Output,EventEmitter  } from '@angular/core';
import { Globals } from '../../globals';
import { NgModel } from '@angular/forms';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Imagen } from './imagen';


// Variable in assets/js/scripts.js file

@Component({
  selector: 'control-pdf'
  ,templateUrl: './control-pdf.component.html'
  ,styleUrls: ['./control-pdf.component.css']
})
export class ControlPDF implements OnInit {
	 title = 'app works!';
	@Input() generar : number=0;
	@Input() contenido : any;
	@Input() configuracion : any={};
	@Output() generadoBase64 = new EventEmitter();
	constructor(){
		 //called first time before the ngOnInit()
	}
	ngOnChanges(changes: SimpleChanges){
		if(changes.generar!==undefined && changes.generar.currentValue>=1){
			pdfMake.vfs = pdfFonts.pdfMake.vfs;
			let dd = this.contenido;
//			pdfMake.createPdf(dd).download(this.configuracion['nombre']);
			pdfMake.createPdf(dd).getBase64(function(encodedString) {
				this.generadoBase64.emit(encodedString);
			}.bind(this));
			
		}
		
    }
	
	
	ngOnInit(){
	}
	
}
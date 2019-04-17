import { Component, OnInit, Input, Inject  } from '@angular/core';
import { OnChanges,SimpleChanges } from '@angular/core';
import { Output,EventEmitter  } from '@angular/core';
import { Globals } from '../../globals';
import { NgModel } from '@angular/forms';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { saveAs } from 'file-saver/src/FileSaver';


// Variable in assets/js/scripts.js file

@Component({
  selector: 'control-modal'
  ,templateUrl: './control-modal.component.html'
  ,styleUrls: ['./control-modal.component.css']
})
export class ControlModal implements OnInit {
	 @Input() parametros : any = {};
	 @Input() mostrarse=false;
	 @Output() ocultarse = new EventEmitter();
	 imagen : any = {};
	 vermodal:any=false;
	 datosDeposito : string =undefined;
	 trustedDashboardUrl : SafeUrl;
	 private currentTimeout: number;
	
	 
	constructor(public  sanitizer: DomSanitizer){
		 //called first time before the ngOnInit()
	}
	ngOnChanges(changes: SimpleChanges){
			this.vermodal=this.mostrarse;
			if(this.parametros['archivo']!=undefined){
			
				let extension=this.parametros['extension'];
				
				let type='';						
				if(extension=="pdf"){
					type="application/pdf";
				}else if (extension=="png"){
					type="image/png";
				}else if (extension=="jpeg" ||extension=="jpg"){
					type="image/jpeg";
				}else{
					type="application/octet-stream";
				}
				if(type=="application/octet-stream"){
					this.vermodal=false;
					let blob = this.converBase64toBlob(this.parametros['archivo'], 'octet/stream');
					let blobURL = URL.createObjectURL(blob);	
					saveAs(blobURL, 'archivo.'+this.parametros['extension']);
				}else if(type!="application/octet-stream"){
					this.datosDeposito="data:"+type+";base64,"+this.parametros['archivo'];
					this.trustedDashboardUrl =this.sanitizer.bypassSecurityTrustResourceUrl(this.datosDeposito);
				}
			}else{
				this.trustedDashboardUrl=this.sanitizer.bypassSecurityTrustResourceUrl(this.parametros['url']);
			}
    }
	
	ngOnInit(){
		
	}
	cerrarmodal(){
		this.ocultarse.emit(false);
		this.vermodal=false;
		this.datosDeposito=undefined;
	}
	converBase64toBlob(content, contentType) {
		
	contentType = contentType || '';
	let sliceSize = 512;
	let byteCharacters = window.atob(content); 
	let byteArrays = [];
	for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		let slice = byteCharacters.slice(offset, offset + sliceSize);
		let byteNumbers = new Array(slice.length);
			for (let i = 0; i < slice.length; i++) {
				byteNumbers[i] = slice.charCodeAt(i);
			}
		let byteArray = new Uint8Array(byteNumbers);
		byteArrays.push(byteArray);
	}
	let blob = new Blob(byteArrays, {
	type: contentType
	});
	 return blob;
}
	
	
}
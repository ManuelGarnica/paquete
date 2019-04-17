import { Component, OnInit, Input, Inject  } from '@angular/core';
import { OnChanges,SimpleChanges } from '@angular/core';
import { Output,EventEmitter  } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Angular2TokenService } from 'angular2-token';
import { ControlUploadFileService } from './control-uploadfile.service';


@Component({
  selector: 'control-uploadfile'
  ,templateUrl: './control-uploadfile.component.html'
  ,styleUrls: ['./control-uploadfile.component.css']
  ,providers: [ControlUploadFileService]
})
export class ControlUploadFile implements OnInit  {

	@Input() placeholder : string = "";
	@Input() etiqueta : string = "";
	@Input() tamanioinput : string=null;
	@Input() tamaniolabel : string=null;
	@Input() tamanio : string=null;
	@Input() archivoParaCargar : any={};
	@Output() archivoCargado = new EventEmitter();
	
	rutaCompleta : string=null;
	inputarchivo : string=null;
	archivo : any={
		contenido : null
		,rutaArchivo : null
		,nombreArchivo : null
	};
	tipo : string = null;
	@Input() urlCarga : string = null;
	
	constructor(
		private tokenService: Angular2TokenService
		,private _controlUploadService: ControlUploadFileService
	){}

	changeListener($event) : void {	
		let inputValue=$event.target;
		let file:File = inputValue.files[0];
		
		let myReader:FileReader = new FileReader();
		myReader.onloadend = (e) => {
			
			let contenido = myReader.result;			
			
			let array = contenido.split(',');
			if(array.length>0){
				this.archivo['contenido']=array[array.length-1];
				this.archivo['rutaArchivo']=null;
				this.archivo['nombreArchivo']=this.inputarchivo;
				this._controlUploadService.upload(this.urlCarga,this.archivo).subscribe(
				  result => {
					this.archivoCargado.emit(result);
					this.rutaCompleta=result['rutaArchivo']+result['nombreArchivo'];
				  },
				  error => {
					console.log(<any>error);
				  }
				);
				
			}else{
				this.archivo.contenido={};
				
			}
			
		}
		myReader.readAsDataURL(file);
	}

	ngOnChanges(changes: SimpleChanges){
		if(this.archivoParaCargar!==undefined&&this.archivoParaCargar!==null){
			this.rutaCompleta=this.archivoParaCargar['rutaArchivo']!==null && this.archivoParaCargar['rutaArchivo']!==undefined?this.archivoParaCargar['rutaArchivo']:"";
			this.rutaCompleta+=this.archivoParaCargar['nombreArchivo']!==null && this.archivoParaCargar['nombreArchivo']!==undefined?this.archivoParaCargar['nombreArchivo']:"";
			this.archivo=this.archivoParaCargar;
		}else{
			this.archivo.contenido={};
		}
    }

	ngOnInit() {
		if(this.archivoParaCargar!==undefined&&this.archivoParaCargar!==null){
			this.rutaCompleta=this.archivoParaCargar['rutaArchivo']!==null && this.archivoParaCargar['rutaArchivo']!==undefined?this.archivoParaCargar['rutaArchivo']:"";
			this.rutaCompleta+=this.archivoParaCargar['nombreArchivo']!==null && this.archivoParaCargar['nombreArchivo']!==undefined?this.archivoParaCargar['nombreArchivo']:"";
			this.archivo=this.archivoParaCargar;
		}
	}
  	
}
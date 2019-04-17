import { Component, OnInit, Input, Inject  } from '@angular/core';
import { OnChanges,SimpleChanges } from '@angular/core';
import { Output,EventEmitter  } from '@angular/core';
import { Globals } from '../../globals';
import { NgModel } from '@angular/forms';




// Variable in assets/js/scripts.js file

@Component({
  selector: 'control-carrusel'
  ,templateUrl: './control-carrusel.component.html'
  ,styleUrls: ['./control-carrusel.component.css']
})
export class ControlCarrusel implements OnInit {
	urlImagenes : string ="";
	 @Input() carrusel : any = {};
	 
	 indexActivo : number=0;
	 classItemActivo : String='item active';
	 classItem : String='item';
	 classIndicarActivo : String='active';
	 classIndicador : String='';
	 private currentTimeout: number;
	
	 
	constructor(){
		this.urlImagenes=Globals.ipRecursosPlantilla;
	}
	ngOnChanges(changes: SimpleChanges){
			console.log('Cambios');
			console.log(changes);
    }
	
	ngOnInit(){
		
			 setInterval(() => {
               this.Siguiente();
                }, 5000);
				
		
				for(let dato in this.carrusel.datos){
					if(dato=="0"){
						this.carrusel.datos[dato]['clas']=this.classIndicarActivo;
						this.carrusel.datos[dato]['clas2']=this.classItemActivo;
					} else{
						
						this.carrusel.datos[dato]['clas']="";
						this.carrusel.datos[dato]['clas2']=this.classItem;
						
						
					}
				}

	}
	Anterior(){
		if(this.indexActivo>0){
			this.indexActivo--;
		}else{
			this.indexActivo=(this.carrusel.datos.length)-1;
		}
			
			for(let dato in this.carrusel.datos){
				if(parseInt(dato)==this.indexActivo){
					this.carrusel.datos[dato]['clas']=this.classIndicarActivo;
					this.carrusel.datos[dato]['clas2']=this.classItemActivo;
				} else{
					
					this.carrusel.datos[dato]['clas']="";
					this.carrusel.datos[dato]['clas2']=this.classItem;
					
					
				}
			}
	}
	 Siguiente(){
		if(this.indexActivo<((this.carrusel.datos.length)-1)){
			this.indexActivo++;
		}else{
			this.indexActivo=0;			
		}
			for(let dato in this.carrusel.datos){
				if(parseInt(dato)==this.indexActivo){
					this.carrusel.datos[dato]['clas']=this.classIndicarActivo;
				this.carrusel.datos[dato]['clas2']=this.classItemActivo;
				} else{
					
					this.carrusel.datos[dato]['clas']="";
				this.carrusel.datos[dato]['clas2']=this.classItem;
					
					
				}
			}
		
	}
	
	
}
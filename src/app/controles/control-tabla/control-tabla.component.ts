import { Component, OnInit, Input  } from '@angular/core';
import { OnChanges,SimpleChanges } from '@angular/core';
import { Output,EventEmitter  } from '@angular/core';
import { NgModel } from '@angular/forms';



// Variable in assets/js/scripts.js file

@Component({
  selector: 'control-tabla',
  templateUrl: './control-tabla.component.html',
  styleUrls: ['./control-tabla.component.css']
})
export class ControlTabla implements OnInit {
	cabeceras : any[]=[];
	@Input() configuraciones : any={};
	@Input() contenido : any[]=[];
	tablamostrar : any[]=[];
	ordenamiento : any[]=[];
	numeropaginas : number=1;
	paginaactual : number=1;
	busqueda : String;
	tamaniopagina : number=10;
	@Output() botonclickeado = new EventEmitter();
	
	constructor() {
	}
	ngOnChanges(changes: SimpleChanges) {
		if(changes.contenido.currentValue.length>=0)
			this.pintarTabla(changes.contenido.currentValue);
    }
	
	clickboton(nombre,parametros){
		this.botonclickeado.emit({nombre:nombre,parametros:parametros});
	}

	ngOnInit() {
	}
	
	pintarTabla(contenido){
		let configuracion=this.configuraciones;
		let tablamostrar=[];
		let cabeceras=[];
		let numerocolumna=1;
		for(let cabecera in configuracion['columnasconf']){
			if(configuracion['columnasins']!==undefined){
				while(configuracion['columnasins'][numerocolumna]!==undefined){
					let cabeceragenerada={};
					cabeceragenerada["mostrado"]=configuracion['columnasins'][numerocolumna]['nombrecolumna'];
					cabeceragenerada["real"]=numerocolumna.toString();
					cabeceragenerada["tamanio"]=this.calculartamanio(numerocolumna);
					cabeceras.push(cabeceragenerada);				
					numerocolumna++;
				}
			}
			let cabeceragenerada={};
			cabeceragenerada["mostrado"]=configuracion['columnasconf'][cabecera]['nombre'];
			cabeceragenerada["real"]=numerocolumna.toString();
			cabeceragenerada["tamanio"]=this.calculartamanio(cabecera);
			cabeceras.push(cabeceragenerada);				
			numerocolumna++;
			
		}
		if(configuracion['columnasins']!==undefined){
				while(configuracion['columnasins'][numerocolumna]!==undefined){
					let cabeceragenerada={};
					cabeceragenerada["mostrado"]=configuracion['columnasins'][numerocolumna]['nombrecolumna'];
					cabeceragenerada["real"]=numerocolumna.toString();
					cabeceragenerada["tamanio"]=this.calculartamanio(numerocolumna);
					cabeceras.push(cabeceragenerada);				
					numerocolumna++;
				}
		}
		
		for(let renglon in contenido){
			numerocolumna=1;
			let renglonnuevo={};
			for(let cabecera in configuracion['columnasconf']){
				if(configuracion['columnasins']!==undefined){
					while(configuracion['columnasins'][numerocolumna]!==undefined){
						renglonnuevo[numerocolumna]=JSON.parse(JSON.stringify(configuracion['columnasins'][numerocolumna]['control']));
						renglonnuevo[numerocolumna]['tamanio']=this.calculartamanio(numerocolumna);
						renglonnuevo[numerocolumna]['argumento']=contenido[renglon];
						numerocolumna++;	
					}
				}
				renglonnuevo[numerocolumna]={};
				renglonnuevo[numerocolumna]['valor']=contenido[renglon][cabecera];
				renglonnuevo[numerocolumna]['tamanio']=this.calculartamanio(cabecera);
				numerocolumna++;		
			}
			if(configuracion['columnasins']!==undefined){
					while(configuracion['columnasins'][numerocolumna]!==undefined){
						renglonnuevo[numerocolumna]=JSON.parse(JSON.stringify(configuracion['columnasins'][numerocolumna]['control']));
						renglonnuevo[numerocolumna]['tamanio']=this.calculartamanio(numerocolumna);
						renglonnuevo[numerocolumna]['argumento']=contenido[renglon];
						numerocolumna++;	
					}
			}
			tablamostrar.push(renglonnuevo);
		}
		
		this.cabeceras=cabeceras;
		this.tablamostrar=tablamostrar;
	}
	
	calculartamanio(cabecera){
		let tamanio = 1;
		if(
			this.configuraciones.columnasconf === undefined
			|| this.configuraciones.columnasconf[cabecera] === undefined
			|| this.configuraciones.columnasconf[cabecera].tamanio === undefined
		){
			if(
				this.configuraciones.columnasins === undefined
				|| this.configuraciones.columnasins[cabecera] === undefined
				|| this.configuraciones.columnasins[cabecera].tamanio === undefined
			){
				tamanio=1;
			}else{
				tamanio=this.configuraciones.columnasins[cabecera].tamanio;
			}
		}else{
			tamanio=this.configuraciones.columnasconf[cabecera].tamanio;
		}
		return tamanio;
	}
	
	clickOrdenamiento(columna){
//		let contenido=JSON.parse(JSON.stringify(this.contenido));
		let sentido = 'ASC';
		if(this.ordenamiento[columna]===undefined){
			sentido='ASC';
		}else{
			if(this.ordenamiento[columna].sentido==='ASC'){
				sentido='DESC';
			}else if(this.ordenamiento[columna].sentido==='DESC'){
				sentido='ASC';
			}else{
				sentido='ASC';
			}
		}
		
		this.ordenamiento[columna]={sentido:sentido};
		let contenidoreturn = JSON.parse(JSON.stringify(this.ordenarPorColumna(this.contenido,columna,sentido)));
		this.pintarTabla(contenidoreturn);
	}
	
	ordenarPorColumna(array, key, sentido) {
		if(sentido===undefined || sentido===null){
			return array;
		}else if(sentido.toUpperCase()==="ASC"){
			return array.sort(function(a, b) {
				var x = a[key];
				var y = b[key];
				return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			});
		}else{
			return array.sort(function(a, b) {
				var x = b[key];
				var y = a[key];
				return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			});
		}
	}
	mostrarPagina(numeropagina,busqueda,tablamostrar){
		let busquedaInsencitiva=(busqueda!==undefined?String(busqueda):'').toUpperCase();
		let tablafiltro=[];
		let tablapaginada=[];
		for(let renglon in tablamostrar){
			let usarRenglon = false;
			for(let celda in tablamostrar[renglon]){
				let valor=tablamostrar[renglon][celda]['valor'];
				let valorinsensitivo=(valor!==undefined?String(valor):'').toUpperCase();
				if(valorinsensitivo.includes(busquedaInsencitiva)){
					usarRenglon = true;
				}
			}
			if(usarRenglon){
				tablafiltro.push(tablamostrar[renglon]);
			}
		}
		let tamanioarray=tablafiltro===undefined?0:tablafiltro.length;
		let matArray=Array(Math.ceil(tamanioarray/this.tamaniopagina)).fill(1).map((x,i)=>i+1);
		let numeropaginas=matArray.length;
		this.numeropaginas=matArray.length;
		if(this.paginaactual>numeropaginas){
			this.paginaactual=1;
		}
		for(let contador=(this.tamaniopagina*(numeropagina-1));contador<=((this.tamaniopagina*numeropagina)-1)&&contador<tamanioarray;contador++){
			tablapaginada.push(tablafiltro[contador]);
		}
		return tablapaginada;
	}
	cambiarPagina(pagina){
		this.paginaactual=pagina;
	}
	desplazarse(numerodepaginas){
		if((this.paginaactual+numerodepaginas)>0&&(this.paginaactual+numerodepaginas)<=this.numeropaginas){
			this.paginaactual+=numerodepaginas;
		}
	}
	pintarRenglon(renglon){
		return Object.keys(renglon);
	}
}
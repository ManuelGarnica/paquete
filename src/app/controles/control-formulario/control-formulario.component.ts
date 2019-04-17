import { Component, OnInit, Input, Inject  } from '@angular/core';
import { OnChanges,SimpleChanges } from '@angular/core';
import { Output,EventEmitter  } from '@angular/core';
import { Globals } from '../../globals';
import { NgModel } from '@angular/forms';




// Variable in assets/js/scripts.js file

@Component({
  selector: 'control-formulario'
  ,templateUrl: './control-formulario.component.html'
  ,styleUrls: ['./control-formulario.component.css']
})
export class ControlFormulario implements OnInit {
	
	@Input() validar : any;
	@Output() valido = new EventEmitter();
	
	@Input() datosformulario : any = {};
	@Input() formulario : any = {};
	@Output() botonclickeado = new EventEmitter();
	
	saltolinea : any = {};
	diaInicio : any = {};
	
	mostrarse:any=false;
	parametrosmodal : any ={};
	
	constructor(){
		 
	}
	ngOnChanges(changes: SimpleChanges){
		if(changes.validar!==undefined && changes.validar.currentValue.verificar>0 ){
			if(this.validar["pasoValidacion"]===undefined)
				this.validar["pasoValidacion"]={};
			this.validar["mostrarValidaciones"]=true;
			this.validar.pasoValidacion[this.formulario.identificador]=this.validarCampos();
			this.valido.emit(this.validar);
		}
		else if(changes.datosformulario !==undefined && changes.datosformulario["previousValue"]!==undefined){
			this.iniciarCampos();
		}
		/*else if (changes.datosformulario["previousValue"]!=undefined){
			changes.datosformulario["previousValue"]=undefined;
			this.iniciarCampos();
			
		}*/
    }
	
	achivoCargado(campo,valor){
		this.datosformulario[campo]=valor;
	}
	verificarBrinco(formulario,campo,valor){
		let retorno = false;
		if(valor==-1){
			this.saltolinea[formulario]=0;
			return false;
		}else if(campo!==undefined){
			this.saltolinea[formulario]=isNaN(this.saltolinea[formulario])?0:this.saltolinea[formulario];
			let valoragregar=parseInt(valor);
			let valorformulario=this.saltolinea[formulario];
			let valorjunto = valoragregar+valorformulario;
			if(valorjunto==12){
				this.saltolinea[formulario]=12;
				retorno=false;
			}else if(valorjunto>12){
				this.saltolinea[formulario]=valoragregar;
				retorno=true;
			}else if(valorjunto<12){
				this.saltolinea[formulario]=valorjunto;
				retorno=false;
			}else{
				retorno=true;
			}
		}else{
			retorno=true;
		}
		return retorno;
	}
	
	clickboton(nombre,parametros){
		this.botonclickeado.emit({nombre:nombre,parametros:parametros});
	}
	
	ngOnInit(){
		this.iniciarCampos();
	}
	obtenerselect(datoscampos,expresion){
		let datosnuevos=[];	
		if(expresion['id']!=undefined && expresion['descripcion']!=undefined && datoscampos!=undefined && datoscampos.length>0){
		for(let datos in datoscampos){
				let nuevovalor=expresion['descripcion'];
				let re = /\@/gi;
				datosnuevos.push({label:datoscampos[datos][nuevovalor.replace(re,'')],value:datoscampos[datos][expresion['id']]});
			}
		}
		return datosnuevos;
	}
	
	iniciarCampos(){
		if(this.formulario!==undefined&&this.formulario.campos!=undefined){
			for(let campo in this.formulario.campos){
				let contenido = null;
				if(this.formulario.campos[campo].tipo==='select'){
					contenido = this.datosformulario[this.formulario.campos[campo].nombre];
					if(contenido===null || contenido === undefined)
						this.datosformulario[this.formulario.campos[campo].nombre]=null;
				} else if(this.formulario.campos[campo].tipo==='checkbox'){
					contenido = this.datosformulario[(this.formulario.campos[campo]["grupo"]!==undefined?this.formulario.campos[campo]["grupo"]+"_":'')+this.formulario.campos[campo].nombre];
					if(contenido===null || contenido === undefined)
						this.datosformulario[(this.formulario.campos[campo]["grupo"]!==undefined?this.formulario.campos[campo]["grupo"]+"_":'')+this.formulario.campos[campo].nombre]=false;
				} else if(this.formulario.campos[campo].tipo==='text'){
					contenido = this.datosformulario[this.formulario.campos[campo].nombre];
					if(contenido===null || contenido === undefined)
						this.datosformulario[this.formulario.campos[campo].nombre]="";
				} else if(this.formulario.campos[campo].tipo==='date'){
					contenido = this.datosformulario[this.formulario.campos[campo].nombre];
					if(contenido===null || contenido === undefined){
						this.datosformulario[this.formulario.campos[campo].nombre]="";
					}else{
						if(this.diaInicio[this.formulario['identificador']]===undefined){
							this.diaInicio[this.formulario['identificador']]={};
						}
						this.diaInicio[this.formulario['identificador']][this.formulario.campos[campo]['nombre']] = new Date();
					}
				} else if(this.formulario.campos[campo].tipo==='textarea'){
					contenido = this.datosformulario[this.formulario.campos[campo].nombre];
					if(contenido===null || contenido === undefined)
						this.datosformulario[this.formulario.campos[campo].nombre]="";
				}else if(this.formulario.campos[campo].tipo==='file'){
					contenido = this.datosformulario[this.formulario.campos[campo].nombre];
					if(contenido===null || contenido === undefined)
						this.datosformulario[this.formulario.campos[campo].nombre]={};
				}
			}
		}
	}	
	validarCampos(){
		if(this.formulario!==undefined&&this.formulario.campos!=undefined){
			let pasoValidaciongrupo=false;
			let pasoValidacion=true;
			for(let campo in this.formulario.campos){
				if(this.formulario.campos[campo].validacion===undefined){
				} else if(this.formulario.campos[campo].tipo==='select-filter'){
					pasoValidacion=pasoValidacion&&this.validarcampo(this.formulario.campos[campo].validacion,this.datosformulario[this.formulario.campos[campo].nombre]);
				} else if(this.formulario.campos[campo].tipo==='select'){
					pasoValidacion=pasoValidacion&&this.validarcampo(this.formulario.campos[campo].validacion,this.datosformulario[this.formulario.campos[campo].nombre]);
				} else if(this.formulario.campos[campo].tipo==='checkbox'){
					pasoValidacion=pasoValidacion&&this.validarcampo((this.formulario.campos[campo]["grupo"]!==undefined?this.formulario.campos[campo]["grupo"]+"_":'')+this.formulario.campos[campo].validacion,this.datosformulario[(this.formulario.campos[campo]["grupo"]!==undefined?this.formulario.campos[campo]["grupo"]+"_":'')+"_"+this.formulario.campos[campo].nombre]);
				} else if(this.formulario.campos[campo].tipo==='text'){
					pasoValidacion=pasoValidacion&&this.validarcampo(this.formulario.campos[campo].validacion,this.datosformulario[this.formulario.campos[campo].nombre]);
				} else if(this.formulario.campos[campo].tipo==='textarea'){
					pasoValidacion=pasoValidacion&&this.validarcampo(this.formulario.campos[campo].validacion,this.datosformulario[this.formulario.campos[campo].nombre]);
				} else if(this.formulario.campos[campo].tipo==='date'){
					pasoValidacion=pasoValidacion&&this.validarcampo(this.formulario.campos[campo].validacion,this.datosformulario[this.formulario.campos[campo].nombre]);
				}else{
					pasoValidacion=false;
				}
			}
			return pasoValidacion;
		}else{
			return null;
		}
	}	
	validarcampo(expresionregular,valor){
		
		let resultado=false;
			if(valor===null || valor===undefined){
			resultado=false;
		}else{
			let regexp = new RegExp(expresionregular);
			resultado = regexp.test(valor);
		}
		return resultado;
	}
	obtenerOptionSelect(expresion : string,valores : any){
		let resultado = "";
		if(expresion===undefined){
		}else if(expresion.indexOf("@")!=-1){
			let nuevovalor=expresion;
			resultado=valores[expresion];
			for(let valor in valores){
				let expresionregular = new RegExp("@"+valor+"@", "g");
				nuevovalor=nuevovalor.replace(expresionregular,valores[valor]);
			}
			resultado=nuevovalor;
		}else{
			resultado=valores[expresion];
		}
		return resultado;
	}
	cambiarDia($event,nombre,formulario){
		this.datosformulario[nombre]=$event;		
		this.clickboton(nombre,formulario);
		
	}
	
	mostrarmodal(imagen){
		this.mostrarse=true;
		this.parametrosmodal['url']=imagen;
	}
	ocultarmodal($event){
		this.mostrarse=false;
	}

	
}
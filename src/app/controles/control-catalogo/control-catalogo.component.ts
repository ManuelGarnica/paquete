import { Component, OnInit, Input, Inject  } from '@angular/core';
import { OnChanges,SimpleChanges } from '@angular/core';
import { Output,EventEmitter  } from '@angular/core';
import { Globals } from '../../globals';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'control-catalogo'
  ,templateUrl: './control-catalogo.component.html'
  ,styleUrls: ['./control-catalogo.component.css']
})
export class ControlCatalogo implements OnInit {
	@Input() articulos : any=[];
	
	constructor(){

	}
	ngOnChanges(changes: SimpleChanges){
		
    }
	
	
	ngOnInit(){
	}
	
}
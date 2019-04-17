import { Component, OnInit, Input, Inject  } from '@angular/core';
import { OnChanges,SimpleChanges } from '@angular/core';
import { Output,EventEmitter  } from '@angular/core';
import { NgModel } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'control-maps'
  ,templateUrl: './control-maps.component.html'
  ,styleUrls: ['./control-maps.component.css']
})
export class ControlMaps implements OnInit {
	lat: number = 51.678418;
	lng: number = 7.809007;

	constructor(){

	}
	ngOnChanges(changes: SimpleChanges){
		
    }
	
	
	ngOnInit(){
	}
	
}
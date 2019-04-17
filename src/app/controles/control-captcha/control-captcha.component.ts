import { Component, OnInit, Input  } from '@angular/core';
import { OnChanges,SimpleChanges } from '@angular/core';
import { Output,EventEmitter  } from '@angular/core';
import { Globals } from '../../globals';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'control-captcha',
  templateUrl: './control-captcha.component.html',
  styleUrls: ['./control-captcha.component.css']
})
export class ControlCaptcha implements OnInit {
	@Output() captcha = new EventEmitter();	
	@Input() validacion : boolean =true;
	recaptchaStr = '';
	constructor() {
		
	}
	ngOnChanges(changes: SimpleChanges) {
		
	}
	
	ngOnInit() {
		
	}
 
	onLoginSubmit(): void {
	}
	 
	onLoginClick(captchaRef: any): void {
		if (this.recaptchaStr) {
			captchaRef.reset();
		}
		captchaRef.execute();
	}
		
	resolved(captchaResponse: string) {
		this.captcha.emit(captchaResponse); 
		this.recaptchaStr = captchaResponse;
		if (this.recaptchaStr) {
			this.onLoginSubmit();
		}				
    }
	 
	/*public resolved(captchaResponse: string): void {
			this.recaptchaStr = captchaResponse;
			if (this.recaptchaStr) {
				this.onLoginSubmit();
			}
		}
	*/
	
}

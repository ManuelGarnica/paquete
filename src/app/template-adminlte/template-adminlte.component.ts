import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'template-adminlte',
  templateUrl: './template-adminlte.component.html',
  styleUrls: ['./template-adminlte.component.css']
})
export class TemplateComponent implements OnInit, OnDestroy {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor() { }

	ngOnInit() {
		this.body.classList.add('skin-blue');
		this.body.classList.add('sidebar-mini');

	}

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }

}

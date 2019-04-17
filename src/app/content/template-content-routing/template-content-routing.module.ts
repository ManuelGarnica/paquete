import { TemplateContentComponent } from '../template-content.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TemplateContentRoutingModule { }

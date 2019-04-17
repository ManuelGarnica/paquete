import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateControlSidebarComponent } from './template-control-sidebar.component';

describe('TemplateControlSidebarComponent', () => {
  let component: TemplateControlSidebarComponent;
  let fixture: ComponentFixture<TemplateControlSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateControlSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateControlSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

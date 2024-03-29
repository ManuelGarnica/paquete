import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFooterComponent } from './admin-footer.component';

describe('TemplateFooterComponent', () => {
  let component: TemplateFooterComponent;
  let fixture: ComponentFixture<TemplateFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

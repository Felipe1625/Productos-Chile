import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDatosPersonalesComponent } from './panel-datos-personales.component';

describe('PanelDatosPersonalesComponent', () => {
  let component: PanelDatosPersonalesComponent;
  let fixture: ComponentFixture<PanelDatosPersonalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelDatosPersonalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelDatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDatosEmpresarialesComponent } from './panel-datos-empresariales.component';

describe('PanelDatosEmpresarialesComponent', () => {
  let component: PanelDatosEmpresarialesComponent;
  let fixture: ComponentFixture<PanelDatosEmpresarialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelDatosEmpresarialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelDatosEmpresarialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

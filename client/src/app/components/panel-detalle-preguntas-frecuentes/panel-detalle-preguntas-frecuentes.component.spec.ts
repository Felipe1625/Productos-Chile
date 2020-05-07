import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDetallePreguntasFrecuentesComponent } from './panel-detalle-preguntas-frecuentes.component';

describe('PanelDetallePreguntasFrecuentesComponent', () => {
  let component: PanelDetallePreguntasFrecuentesComponent;
  let fixture: ComponentFixture<PanelDetallePreguntasFrecuentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelDetallePreguntasFrecuentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelDetallePreguntasFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

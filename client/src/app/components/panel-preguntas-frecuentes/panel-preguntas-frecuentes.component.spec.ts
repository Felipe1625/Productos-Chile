import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPreguntasFrecuentesComponent } from './panel-preguntas-frecuentes.component';

describe('PanelPreguntasFrecuentesComponent', () => {
  let component: PanelPreguntasFrecuentesComponent;
  let fixture: ComponentFixture<PanelPreguntasFrecuentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelPreguntasFrecuentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelPreguntasFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

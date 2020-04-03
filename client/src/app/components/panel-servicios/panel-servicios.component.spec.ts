import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelServiciosComponent } from './panel-servicios.component';

describe('PanelServiciosComponent', () => {
  let component: PanelServiciosComponent;
  let fixture: ComponentFixture<PanelServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

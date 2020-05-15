import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasDeProductosComponent } from './politicas-de-productos.component';

describe('PoliticasDeProductosComponent', () => {
  let component: PoliticasDeProductosComponent;
  let fixture: ComponentFixture<PoliticasDeProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticasDeProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasDeProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

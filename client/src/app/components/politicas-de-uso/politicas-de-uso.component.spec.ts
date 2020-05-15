import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasDeUsoComponent } from './politicas-de-uso.component';

describe('PoliticasDeUsoComponent', () => {
  let component: PoliticasDeUsoComponent;
  let fixture: ComponentFixture<PoliticasDeUsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticasDeUsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasDeUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

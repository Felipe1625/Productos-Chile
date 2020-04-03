import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelConfigOnePageComponent } from './panel-config-one-page.component';

describe('PanelConfigOnePageComponent', () => {
  let component: PanelConfigOnePageComponent;
  let fixture: ComponentFixture<PanelConfigOnePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelConfigOnePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelConfigOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

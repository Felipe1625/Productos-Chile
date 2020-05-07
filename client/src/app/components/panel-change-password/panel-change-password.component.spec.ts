import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelChangePasswordComponent } from './panel-change-password.component';

describe('PanelChangePasswordComponent', () => {
  let component: PanelChangePasswordComponent;
  let fixture: ComponentFixture<PanelChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderParamsComponent } from './cylinder-params.component';

describe('CylinderParamsComponent', () => {
  let component: CylinderParamsComponent;
  let fixture: ComponentFixture<CylinderParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

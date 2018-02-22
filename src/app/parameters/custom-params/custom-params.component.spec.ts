import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomParamsComponent } from './custom-params.component';

describe('CustomParamsComponent', () => {
  let component: CustomParamsComponent;
  let fixture: ComponentFixture<CustomParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

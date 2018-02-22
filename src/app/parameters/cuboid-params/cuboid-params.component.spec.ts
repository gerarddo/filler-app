import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuboidParamsComponent } from './cuboid-params.component';

describe('CuboidParamsComponent', () => {
  let component: CuboidParamsComponent;
  let fixture: ComponentFixture<CuboidParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuboidParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuboidParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

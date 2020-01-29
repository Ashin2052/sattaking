import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceModelComponent } from './place-model.component';

describe('PlaceModelComponent', () => {
  let component: PlaceModelComponent;
  let fixture: ComponentFixture<PlaceModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

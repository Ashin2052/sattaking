import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacelistformComponent } from './placelistform.component';

describe('PlacelistformComponent', () => {
  let component: PlacelistformComponent;
  let fixture: ComponentFixture<PlacelistformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacelistformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacelistformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesfromComponent } from './valuesfrom.component';

describe('ValuesfromComponent', () => {
  let component: ValuesfromComponent;
  let fixture: ComponentFixture<ValuesfromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuesfromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

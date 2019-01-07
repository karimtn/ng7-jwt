import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNumberComponent } from './profile.component';

describe('RandomNumberComponent', () => {
  let component: RandomNumberComponent;
  let fixture: ComponentFixture<RandomNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

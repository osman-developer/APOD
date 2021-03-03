import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomyComponent } from './astronomy.component';

describe('AstronomyComponent', () => {
  let component: AstronomyComponent;
  let fixture: ComponentFixture<AstronomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstronomyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

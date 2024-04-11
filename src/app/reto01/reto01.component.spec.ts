import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reto01Component } from './reto01.component';

describe('Reto01Component', () => {
  let component: Reto01Component;
  let fixture: ComponentFixture<Reto01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reto01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Reto01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

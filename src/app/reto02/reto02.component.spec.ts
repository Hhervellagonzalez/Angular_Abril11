import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reto02Component } from './reto02.component';

describe('Reto02Component', () => {
  let component: Reto02Component;
  let fixture: ComponentFixture<Reto02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reto02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Reto02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

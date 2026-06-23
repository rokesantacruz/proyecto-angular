import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVuelo } from './crear-vuelo';

describe('CrearVuelo', () => {
  let component: CrearVuelo;
  let fixture: ComponentFixture<CrearVuelo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearVuelo],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearVuelo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

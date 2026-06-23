import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVuelo } from './editar-vuelo';

describe('EditarVuelo', () => {
  let component: EditarVuelo;
  let fixture: ComponentFixture<EditarVuelo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarVuelo],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarVuelo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CargarAlimentoService } from './cargar-alimento.service';

describe('CargarAlimentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargarAlimentoService = TestBed.get(CargarAlimentoService);
    expect(service).toBeTruthy();
  });
});

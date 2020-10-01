import { TestBed } from '@angular/core/testing';

import { PokemonctgService } from './pokemonctg.service';

describe('PokemonctgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonctgService = TestBed.get(PokemonctgService);
    expect(service).toBeTruthy();
  });
});

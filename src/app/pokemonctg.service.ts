import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonctgService {

  pokemontcgURL = 'https://api.pokemontcg.io/v1/cards';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>('${this.pokemonctgURL}');
  }
}

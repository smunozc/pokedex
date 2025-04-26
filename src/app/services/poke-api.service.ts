import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, take } from 'rxjs';
import { Pokemon } from '../models/pokemon/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private readonly apiPath = 'https://pokeapi.co/api/v2';
  readonly pokemon: BehaviorSubject<Pokemon | null> = new BehaviorSubject<Pokemon | null>(null);

  constructor(private readonly http: HttpClient) {}

  getPokemonDetails(name: string): void {
    this.http.get<Pokemon>(this.apiPath + `/pokemon/${name}`)
    .pipe(take(1))
    .subscribe((pokemon: Pokemon) => this.pokemon.next(pokemon))
  }

}

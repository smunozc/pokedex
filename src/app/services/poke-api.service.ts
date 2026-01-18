import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { Pokemon } from '../models/pokemon/pokemon';
import { NamedAPIResource } from '../models/common-interfaces/named-api-resource';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private readonly apiPath = 'https://pokeapi.co/api/v2';
  private readonly pokemonListLocalStorageKey: string = 'pokemonList';
  readonly pokemon: BehaviorSubject<Pokemon | null> = new BehaviorSubject<Pokemon | null>(null);
  readonly pokemonList: BehaviorSubject<NamedAPIResource[]> = new BehaviorSubject<NamedAPIResource[]>([]);

  constructor(private readonly http: HttpClient) {
    this.loadPokemon();
  }

  getPokemonDetails(name: string): void {
    this.http.get<Pokemon>(this.apiPath + `/pokemon/${name}`)
    .pipe(take(1))
    .subscribe((pokemon: Pokemon) => this.pokemon.next(pokemon))
  }

  private loadPokemon(): void {
    const list: NamedAPIResource[] = this.getPokemonListFromLocalStorage();
    if(!list.length) {
      this.http.get<{results: NamedAPIResource[]}>(this.apiPath + `/pokemon/?limit=10000`)
      .pipe(
        take(1),
        map(response => response.results)
      )
      .subscribe((apiList: NamedAPIResource[]) => {
        localStorage.setItem(this.pokemonListLocalStorageKey, JSON.stringify(apiList))
        this.pokemonList.next(apiList);
      });
    } else {
      this.pokemonList.next(list);
    }
  }

  private getPokemonListFromLocalStorage(): NamedAPIResource[] {
    return JSON.parse(localStorage.getItem(this.pokemonListLocalStorageKey) || '[]') as NamedAPIResource[];
  }

}

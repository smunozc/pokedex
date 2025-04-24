import { Component } from '@angular/core';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { PokeApiService } from '../../services/poke-api.service';
import { take } from 'rxjs';

@Component({
  selector: 'home',
  imports: [
    SearchBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly searchBarPlaceHolder: string = "¿Qué Pokémon buscas?"

  constructor(private readonly pokeApiService: PokeApiService) {}

  protected search(searchValue: string): void {
    this.pokeApiService.getPokemonDetails(searchValue);
    this.pokeApiService.pokemon.pipe(take(1)).subscribe((pokemon) => {
      console.log(pokemon);
    });
  }
}

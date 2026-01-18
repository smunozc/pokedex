import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { PokeApiService } from '../../services/poke-api.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Pokemon } from '../../models/pokemon/pokemon';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'home',
  imports: [
    SearchBarComponent,
    CommonModule,
    PokemonCardComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('searchBarAnimation', [
      state('true', style({
        top: '2rem'
      })),
      transition('* <=> true', [animate('0.5s ease-in-out')])
    ]),
    trigger('resultsAnimation', [
      state('true', style({
        top: '10rem'
      })),
      transition('* <=> true', [animate('0.5s ease-in-out')])
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  protected readonly searchBarPlaceHolder: string = "¿What pokemon are you looking for?"
  protected searchResult: BehaviorSubject<Pokemon | null> = this.pokeApiService.pokemon;
  protected showCard: boolean = false;
  private pokemonSubscription?: Subscription;

  constructor(private readonly pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokemonSubscription = this.searchResult.subscribe(pokemon => {
      if (pokemon) {
        this.showCard = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.pokemonSubscription?.unsubscribe();
  }

  /**
   * Search for a Pokémon by its name.
   * This method uses the PokeApiService to fetch the details of the Pokémon.
   * This method is called when the user submits a search in the search bar.
   * @param searchValue The value to search for in the Pokémon API.
   */
  protected search(searchValue: string): void {
    if (searchValue) {
      this.pokeApiService.getPokemonDetails(searchValue);
    } else {
      this.showCard = false;
    }
  }

  /**
   * Check if the screen is small (less than 600px) and return true or false.
   * This method is used to determine if the search bar should be displayed at the center or top of the screen.
   * It is called on window resize events.
   * @return true if the screen is small, false otherwise.
   */
  @HostListener('window:resize', ['$event'])
  protected isSmallScreen(event?: Event): boolean {
    return ((event?.target as Window)?.innerWidth ?? window.innerWidth) < 600;
  }
}

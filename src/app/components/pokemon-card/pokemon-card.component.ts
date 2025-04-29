import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon/pokemon';

@Component({
  selector: 'pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent implements OnInit {
  @Input({required: true}) pokemon!: Pokemon | null;

  ngOnInit(): void {
    
  }
}

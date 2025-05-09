import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon/pokemon';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'pokemon-card',
  imports: [
    MatCardModule,
    MatButton
  ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent implements OnInit {
  @Input({required: true}) pokemon!: Pokemon | null;

  ngOnInit(): void {
    
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon/pokemon';
import { CommonModule } from '@angular/common';

const TYPE_COLORS: { [key: string]: string } = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

@Component({
  selector: 'pokemon-card',
  imports: [
    CommonModule
  ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent implements OnInit {
  @Input({required: true}) pokemon!: Pokemon | null;

  ngOnInit(): void {
    
  }

  getTypeColor(type: string): string {
    return TYPE_COLORS[type.toLowerCase()] || '#A8A77A'; // Default to Normal color
  }

  getPrimaryTypeColor(): string {
    if (this.pokemon && this.pokemon.types && this.pokemon.types.length > 0) {
      return this.getTypeColor(this.pokemon.types[0].type.name);
    }
    return '#A8A77A'; // Default to Normal color
  }

  getHp(): number {
    if (!this.pokemon || !this.pokemon.stats) return 0;
    const hpStat = this.pokemon.stats.find(s => s.stat.name === 'hp');
    return hpStat ? hpStat.base_stat : 0;
  }
}

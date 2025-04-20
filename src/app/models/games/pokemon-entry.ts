import { PokemonSpecies } from '../pokemon/pokemon-species/pokemon-species';

export interface PokemonEntry {
    entry_number: number;
    pokemon_species: PokemonSpecies;
}
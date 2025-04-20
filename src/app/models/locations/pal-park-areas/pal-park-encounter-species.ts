import { PokemonSpecies } from '../../pokemon/pokemon-species/pokemon-species';

export interface PalParkEncounterSpecies {
    base_score: number;
    rate: number;
    pokemon_species: PokemonSpecies;
}
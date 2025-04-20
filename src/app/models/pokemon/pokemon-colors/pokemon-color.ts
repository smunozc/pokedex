import { PokemonSpecies } from './../pokemon-species/pokemon-species';
import { Name } from '../../common-interfaces/name';

export interface PokemonColor {
    id: number;
    name: string;
    names: Array<Name>;
    pokemon_species: Array<PokemonSpecies>;
}
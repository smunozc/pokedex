import { Name } from '../../common-interfaces/name';
import { PokemonSpecies } from '../pokemon-species/pokemon-species';

export interface EggGroup {
    id: number;
    name: string;
    names: Array<Name>;
    pokemon_species: Array<PokemonSpecies>;
}
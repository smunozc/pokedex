import { Name } from '../../common-interfaces/name';
import { PokemonSpecies } from '../pokemon-species/pokemon-species';
import { AwesomeName } from './awesome-name';

export interface PokemonShape {
    id: number;
    name: string;
    awesome_names: Array<AwesomeName>;
    names: Array<Name>;
    pokemon_species: Array<PokemonSpecies>;
}
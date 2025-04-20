import { Name } from '../../common-interfaces/name';
import { PokemonSpecies } from '../../pokemon/pokemon-species/pokemon-species';

export interface EvolutionTrigger {
    id: number;
    name: string;
    names: Array<Name>;
    pokemon_species: Array<PokemonSpecies>;
}
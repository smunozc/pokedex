import { PokemonSpecies } from '../../pokemon/pokemon-species/pokemon-species';
import { EvolutionDetail } from './evolution-detail';

export interface ChainLink {
    is_baby: boolean;
    species: PokemonSpecies;
    evolution_details: Array<EvolutionDetail>;
    evolves_to: Array<ChainLink>;
}
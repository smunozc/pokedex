import { Description } from '../../common-interfaces/description';
import { PokemonSpecies } from '../pokemon-species/pokemon-species';
import { GrowthRateExperienceLevel } from './growth-rate-experience-level';

export interface GrowthRate {
    id: number;
    name: string;
    formula: string;
    descriptions: Array<Description>;
    levels: Array<GrowthRateExperienceLevel>;
    pokemon_species: Array<PokemonSpecies>;
}
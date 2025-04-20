import { Generation } from '../games/generation';
import { PokemonType } from './pokemon-type';

export interface PokemonTypePast {
    generation: Generation;
    types: Array<PokemonType>;
}
import { Ability } from './ability';

export interface PokemonAbility {
    is_hidden: boolean;
    slot: number;
    ability: Ability;
}
import { Item } from '../../items/item/item';
import { Location } from '../../locations/location';
import { Move } from '../../pokemon-moves/move';
import { PokemonSpecies } from '../../pokemon/pokemon-species/pokemon-species';
import { Type } from '../../pokemon/types/type';
import { EvolutionTrigger } from '../evolution-triggers/evolution-trigger';

export interface EvolutionDetail {
    item: Item;
    trigger: EvolutionTrigger;
    gender: number;
    held_item: Item;
    known_move: Move
    known_move_type: Type;
    location: Location;
    min_level: number;
    min_happiness: number;
    min_beauty: number;
    min_affection: number;
    needs_overworld_rain: boolean;
    party_species: PokemonSpecies;
    party_type: Type;
    relative_physical_stats: number;
    time_of_day: string;
    trade_species: PokemonSpecies;
    turn_upside_down: boolean;
}
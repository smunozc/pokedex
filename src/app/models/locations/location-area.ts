import { Name } from '../common-interfaces/name';
import { EncounterMethodRate } from './encounter-method-rate';
import { Location } from './location';
import { PokemonEncounter } from './pokemon-encounter';

export interface LocationArea {
    id: number;
    name: string;
    game_index: number;
    encounter_method_rates: Array<EncounterMethodRate>;
    location: Location;
    names: Array<Name>;
    pokemon_encounters: Array<PokemonEncounter>;
}
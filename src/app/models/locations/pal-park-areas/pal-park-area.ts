import { Name } from '../../common-interfaces/name';
import { PalParkEncounterSpecies } from './pal-park-encounter-species';

export interface PalParkArea {
    id: number;
    name: string;
    names: Array<Name>;
    pokemon_encounters: Array<PalParkEncounterSpecies>;
}
import { Description } from '../common-interfaces/description';
import { Name } from '../common-interfaces/name';
import { Region } from '../locations/region';
import { PokemonEntry } from './pokemon-entry';
import { VersionGroup } from './version-group';

export interface Pokedex {
    id: number;
    name: string;
    is_main_series: boolean;
    descriptions: Array<Description>;
    names: Array<Name>;
    pokemon_entries: Array<PokemonEntry>;
    region: Region;
    version_groups: VersionGroup;
}
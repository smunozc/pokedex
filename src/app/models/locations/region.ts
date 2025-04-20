import { Name } from '../common-interfaces/name';
import { Generation } from '../games/generation';
import { Pokedex } from '../games/pokedex';
import { VersionGroup } from '../games/version-group';
import { Location } from './location';

export interface Region {
    id: number;
    locations: Array<Location>;
    name: string;
    names: Array<Name>;
    main_generation: Generation;
    pokedexes: Array<Pokedex>;
    version_groups: Array<VersionGroup>;
}
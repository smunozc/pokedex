import { Name } from '../common-interfaces/name';
import { Region } from '../locations/region';
import { Ability } from '../pokemon/abilities/ability';
import { Move } from '../pokemon-moves/move';
import { PokemonSpecies } from '../pokemon/pokemon-species/pokemon-species';
import { Type } from '../pokemon/types/type';
import { VersionGroup } from './version-group';

export interface Generation {
    id: number;
    name: string;
    abilities: Array<Ability>;
    names: Array<Name>;
    main_region: Region;
    moves: Array<Move>;
    pokemon_species: Array<PokemonSpecies>;
    types: Array<Type>;
    version_groups: Array<VersionGroup>;
}
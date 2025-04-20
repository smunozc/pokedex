import { Region } from '../locations/region';
import { MoveLearnMethod } from '../pokemon-moves/move-learn-method';
import { Generation } from './generation';
import { Pokedex } from './pokedex';
import { Version } from './version';

export interface VersionGroup {
    id: number;
    name: string;
    order: number;
    generation: Generation;
    move_learn_methods: Array<MoveLearnMethod>;
    pokedexes: Array<Pokedex>;
    regions: Array<Region>;
    versions: Array<Version>;
}
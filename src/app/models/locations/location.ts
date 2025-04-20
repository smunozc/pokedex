import { GenerationGameIndex } from '../common-interfaces/generation-game-index';
import { Name } from '../common-interfaces/name';
import { LocationArea } from './location-area';
import { Region } from './region';

export interface Location {
    id: number;
    name: string;
    region: Region;
    names: Array<Name>;
    game_indices: Array<GenerationGameIndex>;
    areas: Array<LocationArea>;
}
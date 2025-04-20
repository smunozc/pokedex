import { VersionGroup } from '../games/version-group';
import { MoveLearnMethod } from './move-learn-method';

export interface PokemonMoveVersion {
    level_learned_at: number;
	version_group: VersionGroup;
	move_learn_method: MoveLearnMethod;
}
import { Move } from './move';
import { PokemonMoveVersion } from './pokemon-move-version';

export interface PokemonMove {
    move: Move;
	version_group_details: Array<PokemonMoveVersion>;
}
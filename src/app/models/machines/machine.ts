import { VersionGroup } from '../games/version-group';
import { Item } from '../items/item/item';
import { Move } from '../pokemon-moves/move';

export interface Machine {
    id: number;
    item: Item;
    move: Move;
    version_group: VersionGroup;
}
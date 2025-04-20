import { Name } from '../../common-interfaces/name';
import { MoveDamageClass } from '../../moves/move-damage-classes/move-damage-class';
import { Characteristic } from '../characteristics/characteristic';
import { MoveStatAffectSets } from './move-stat-affect-sets';
import { NatureStatAffectSets } from './nature-stat-affect-sets';

export interface Stat {
    id: number;
    name: string;
    game_index: number;
    is_battle_only: boolean;
    affecting_moves: MoveStatAffectSets;
    affecting_natures: NatureStatAffectSets;
    characteristics: Array<Characteristic>;
    move_damage_class: MoveDamageClass;
    names: Array<Name>;
}
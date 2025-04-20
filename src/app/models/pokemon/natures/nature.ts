import { BerryFlavor } from '../../berries/berry-flavors/berry-flavor';
import { Name } from '../../common-interfaces/name';
import { Stat } from '../stats/stat';
import { MoveBattleStylePreference } from './move-battle-style-preference';
import { NatureStatChange } from './nature-stat-change';

export interface Nature {
    id: number;
    name: String;
    decreased_stat: Stat;
    increased_stat: Stat;
    hates_flavor: BerryFlavor;
    likes_flavor: BerryFlavor;
    pokeathlon_stat_changes: Array<NatureStatChange>;
    move_battle_style_preferences: Array<MoveBattleStylePreference>;
    names: Array<Name>;
}
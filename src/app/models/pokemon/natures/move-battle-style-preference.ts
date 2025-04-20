import { MoveBattleStyle } from '../../moves/move-battle-style';

export interface MoveBattleStylePreference {
    low_hp_preference: number;
    high_hp_preference: number;
    move_battle_style: MoveBattleStyle;
}
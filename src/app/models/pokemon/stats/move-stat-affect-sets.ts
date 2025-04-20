import { MoveStatAffect } from './move-stat-affect';

export interface MoveStatAffectSets {
    increase: Array<MoveStatAffect>;
    decrease: Array<MoveStatAffect>;
}
import { PokeathlonStat } from '../pokeathlon-stats/pokeathlon-stat';

export interface NatureStatChange {
    max_change: number;
    pokeathlon_stat: PokeathlonStat;
}
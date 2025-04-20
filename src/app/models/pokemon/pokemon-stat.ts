import { Stat } from './stats/stat';

export interface PokemonStat {
    stat: Stat;
    effort: number;
    base_stat: number;
}
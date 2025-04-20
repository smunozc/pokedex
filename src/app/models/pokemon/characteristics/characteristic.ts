import { Description } from '../../common-interfaces/description';
import { Stat } from '../stats/stat';

export interface Characteristic {
    id: number;
    gene_modulo: number;
    possible_values: Array<number>;
    highest_stat: Stat;
    descriptions: Array<Description>;
}
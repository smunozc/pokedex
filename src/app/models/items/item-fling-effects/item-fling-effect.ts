import { Effect } from '../../common-interfaces/effect';
import { Item } from '../item/item';

export interface ItemFlingEffect {
    id: number;
    name: string;
    effect_entries: Array<Effect>;
    items: Array<Item>;
}
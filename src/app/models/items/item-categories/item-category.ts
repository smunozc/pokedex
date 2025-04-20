import { Name } from '../../common-interfaces/name';
import { ItemPocket } from '../item-pockets/item-pocket';
import { Item } from '../item/item';

export interface ItemCategory {
    id: number;
    name: string;
    items: Array<Item>;
    names: Array<Name>;
    pocket: ItemPocket;
}
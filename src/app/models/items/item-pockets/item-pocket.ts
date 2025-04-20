import { Name } from '../../common-interfaces/name';
import { ItemCategory } from '../item-categories/item-category';

export interface ItemPocket {
    id: number;
    name: string;
    categories: Array<ItemCategory>;
    names: Array<Name>;
}
import { Description } from '../../common-interfaces/description';
import { Name } from '../../common-interfaces/name';
import { Item } from '../item/item';

export interface ItemAttribute {
    id: number;
    name: string;
    items: Array<Item>;
    names: Array<Name>;
    descriptions: Array<Description>;
}
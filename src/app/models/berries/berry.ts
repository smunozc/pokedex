import { Item } from '../items/item/item';
import { Type } from '../pokemon/types/type';
import { BerryFlavorMap } from './berry-flavor-map';

export interface Berry {
    id: number;
    name: string;
    growth_time: number;
    max_harvest: number;
    natural_gift_power: number;
    size: number;
    smoothness: number;
    soil_dryness: number;
    firmness: number;
    flavors: Array<BerryFlavorMap>;
    item: Item;
    natural_gift_type: Type;
}
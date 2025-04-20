import { Item } from '../../items/item/item';
import { ChainLink } from './chain-link';

export interface EvolutionChain {
    id: number;
    baby_trigger_item: Item;
    chain: ChainLink;
}
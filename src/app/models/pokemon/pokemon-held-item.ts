import { Item } from '../items/item/item';
import { PokemonHeldItemVersion } from './pokemon-held-item-version';

export interface PokemonHeldItem {
    item: Item;
    version_details: PokemonHeldItemVersion;
}
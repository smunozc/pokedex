import { Pokemon } from '../../pokemon/pokemon';
import { ItemHolderPokemonVersionDetail } from './item-holder-pokemon-version-detail';

export interface ItemHolderPokemon {
    pokemon: Pokemon;
    version_details: Array<ItemHolderPokemonVersionDetail>;
}
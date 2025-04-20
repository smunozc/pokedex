import { GenerationGameIndex } from '../../common-interfaces/generation-game-index';
import { MachineVersionDetail } from '../../common-interfaces/machine-version-detail';
import { Name } from '../../common-interfaces/name';
import { VerboseEffect } from '../../common-interfaces/verbose-effect';
import { VersionGroupFlavorText } from '../../common-interfaces/version-group-flavor-text';
import { EvolutionChain } from '../../evolution/evolution-chains/evolution-chain';
import { ItemAttribute } from '../item-attributes/item-attribute';
import { ItemCategory } from '../item-categories/item-category';
import { ItemFlingEffect } from '../item-fling-effects/item-fling-effect';
import { ItemHolderPokemon } from './item-holder-pokemon';
import { ItemSprites } from './item-sprites';

export interface Item {
    id: number;
    name: string;
    cost: number;
    fling_power: number;
    fling_effect: ItemFlingEffect;
    attributes: Array<ItemAttribute>;
    category: ItemCategory;
    effect_entries: Array<VerboseEffect>;
    flavor_text_entries: Array<VersionGroupFlavorText>;
    game_indices: Array<GenerationGameIndex>;
    names: Array<Name>;
    sprites: ItemSprites;
    held_by_pokemon: Array<ItemHolderPokemon>;
    baby_trigger_for: EvolutionChain;
    machines: Array<MachineVersionDetail>
}
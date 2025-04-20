import { Name } from '../../common-interfaces/name';
import { VersionGroup } from '../../games/version-group';
import { Pokemon } from '../pokemon';
import { PokemonFormType } from '../pokemon-form-type';
import { PokemonFormSprites } from './pokemon-form-sprites';

export interface PokemonForm {
    id: number;
    name: string;
    order: number;
    form_order: number;
    is_default: boolean;
    is_battle_only: boolean;
    is_mega: boolean;
    form_name: string;
    pokemon: Pokemon;
    types: Array<PokemonFormType>;
    sprites: PokemonFormSprites;
    version_group: VersionGroup;
    names: Array<Name>;
    form_names: Array<Name>;
}
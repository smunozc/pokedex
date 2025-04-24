import { PokemonForm } from './pokemon-forms/pokemon-form';
import { PokemonAbility } from './abilities/pokemon-ability';
import { PokemonMove } from '../moves/pokemon-move';
import { PokemonSpecies } from './pokemon-species/pokemon-species';
import { VersionGameIndex } from '../common-interfaces/version-game-index';
import { PokemonHeldItem } from './pokemon-held-item';
import { PokemonTypePast } from './pokemon-type-past';
import { PokemonSprites } from './pokemon-sprites';
import { PokemonCries } from './pokemon-cries';
import { PokemonStat } from './pokemon-stat';
import { PokemonType } from './pokemon-type';

export interface Pokemon {
    id: number;
	name: string;
	base_experience: number;
	height: number;
	is_default: boolean;
	order: number;
	weight: number;
	abilities: Array<PokemonAbility>;
	forms: Array<PokemonForm>;
	game_indices: Array<VersionGameIndex>;
	held_items: Array<PokemonHeldItem>;
	location_area_encounters: string;
	moves: Array<PokemonMove>;
	past_types: Array<PokemonTypePast>;
	sprites: PokemonSprites;
	cries: PokemonCries;
	species: PokemonSpecies;
	stats: Array<PokemonStat>;
	types: Array<PokemonType>;
}
import { GenerationGameIndex } from '../../common-interfaces/generation-game-index';
import { Name } from '../../common-interfaces/name';
import { Generation } from '../../games/generation';
import { MoveDamageClass } from '../../moves/move-damage-classes/move-damage-class';
import { Move } from '../../moves/move';
import { TypePokemon } from './type-pokemon';
import { TypeRelationsPast } from './type-realtions-past';
import { TypeRelations } from './type-relations';

export interface Type {
    id: number;
    name: string;
    damage_relations: TypeRelations;
    past_damage_relations: Array<TypeRelationsPast>;
    game_indices: GenerationGameIndex;
    generation: Generation;
    move_damage_class: MoveDamageClass;
    names: Array<Name>;
    pokemon: Array<TypePokemon>;
    moves: Array<Move>;
}
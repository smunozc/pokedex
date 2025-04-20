import { Generation } from '../../games/generation';
import { TypeRelations } from './type-relations';

export interface TypeRelationsPast {
    generation: Generation;
    damage_relations: TypeRelations;
}
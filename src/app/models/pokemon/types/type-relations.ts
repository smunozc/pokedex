import { Type } from './type';

export interface TypeRelations {
    no_damage_to: Array<Type>;
    half_damage_to: Array<Type>;
    double_damage_to: Array<Type>;
    no_damage_from: Array<Type>;
    half_damage_from: Array<Type>;
    double_damage_from: Array<Type>;
}
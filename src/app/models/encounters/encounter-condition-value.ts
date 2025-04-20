import { Name } from '../common-interfaces/name';
import { EncounterCondition } from './encounter-condition';

export interface EncounterConditionValue {
    id: number;
    name: string;
    condition: EncounterCondition;
    names: Array<Name>;
}
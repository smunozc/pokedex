import { Name } from '../common-interfaces/name';
import { EncounterConditionValue } from './encounter-condition-value';

export interface EncounterCondition {
    id: number;
    name: string;
    names: Array<Name>
    values: Array<EncounterConditionValue>;
}
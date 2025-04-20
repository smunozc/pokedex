import { EncounterConditionValue } from '../encounters/encounter-condition-value';
import { EncounterMethod } from '../encounters/encounter-method';

export interface Encounter {
    min_level: number;
    max_level: number;
    condition_values: Array<EncounterConditionValue>;
    chance: number;
    method: EncounterMethod;
}
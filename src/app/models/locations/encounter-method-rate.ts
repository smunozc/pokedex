import { EncounterMethod } from '../encounters/encounter-method';
import { EncounterVersionDetails } from './encounter-version-details';

export interface EncounterMethodRate {
    encounter_method: EncounterMethod;
    version_details: Array<EncounterVersionDetails>;
}
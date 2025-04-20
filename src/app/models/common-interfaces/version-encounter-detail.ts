import { Version } from '../games/version';
import { Encounter } from './encounter';

export interface VersionEncounterDetail {
    version: Version;
    max_chance: number;
    encounter_details: Array<Encounter>;
}
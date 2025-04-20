import { VersionGroup } from '../games/version-group';
import { Machine } from '../machines/machine';

export interface MachineVersionDetail {
    machine: Machine;
    version_group: VersionGroup;
}
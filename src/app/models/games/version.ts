import { Name } from '../common-interfaces/name';
import { VersionGroup } from './version-group';

export interface Version {
    id: number;
    name: string;
    names: Array<Name>;
    version_group: VersionGroup;
}
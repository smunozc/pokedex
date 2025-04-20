import { Description } from '../common-interfaces/description';
import { Name } from '../common-interfaces/name';
import { VersionGroup } from '../games/version-group';

export interface MoveLearnMethod {
    id: number
    name: string;
    descriptions: Array<Description>
    names: Array<Name>
	version_groups: Array<VersionGroup>;
}
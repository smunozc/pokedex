import { Name } from '../../common-interfaces/name';
import { ContestType } from '../../contests/contest-types/contest-type';
import { FlavorBerryMap } from './flavor-berry-map';

export interface BerryFlavor {
    id: number;
    name: string;
    berries: Array<FlavorBerryMap>;
    contest_type: ContestType;
    names: Array<Name>;
}
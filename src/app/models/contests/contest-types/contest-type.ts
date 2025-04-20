import { BerryFlavor } from '../../berries/berry-flavors/berry-flavor';
import { ContestName } from './contest-name';

export interface ContestType {
    id: number;
    name: string;
    berry_flavor: BerryFlavor;
    names: Array<ContestName>;
}
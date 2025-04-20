import { Name } from '../common-interfaces/name';

export interface EncounterMethod {
    id: number;
    name: string;
    order: number;
    names: Array<Name>
}
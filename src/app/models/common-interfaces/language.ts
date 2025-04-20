import { Name } from './name';

export interface Language {
    id: number;
    anme: string;
    official: boolean;
    iso639: string;
    iso3166: string;
    names: Array<Name>;
}
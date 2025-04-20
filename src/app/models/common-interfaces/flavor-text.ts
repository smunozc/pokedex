import { Version } from '../games/version';
import { Language } from './language';

export interface FlavorText {
    flavor_text: string;
    language: Language;
    version: Version;
}
import { VersionGroup } from '../games/version-group';
import { Language } from './language';

export interface VersionGroupFlavorText {
    text: string;
    language: Language;
    version_group: VersionGroup;
}
import { VersionEncounterDetail } from '../common-interfaces/version-encounter-detail';
import { Pokemon } from '../pokemon/pokemon';

export interface PokemonEncounter {
    pokemon: Pokemon,
    version_details: Array<VersionEncounterDetail>
}
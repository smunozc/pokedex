import { Description } from '../../common-interfaces/description';
import { Name } from '../../common-interfaces/name';
import { Move } from '../../pokemon-moves/move';

export interface MoveDamageClass {
    id: number;
    name: string;
    descriptions: Array<Description>;
    moves: Array<Move>;
    names: Array<Name>;
}
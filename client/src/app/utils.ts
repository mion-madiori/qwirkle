import { Player } from './model/player';

export class Utils {
    static compare(a: Player, b: Player): number{
        if (a.score < b.score)
            return 1;
        if (a.score > b.score)
            return -1;
        return 0;
    }
}

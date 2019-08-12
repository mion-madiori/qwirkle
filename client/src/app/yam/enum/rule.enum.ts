export enum Rule {
    NoThisColor,                    // pas de cette couleur
    NoThisTwoColors,                // pas de ces deux couleurs
    OneThisColor,                   // un de cette couleur
    TwoThisColor,                   // deux de cette couleur
    OneThisColorWithoutOtherColor,  // un de cette couleur et pas de cette autre couleur
    ThreeSameColor,                 // trois fois une couleur identique
    FourSameColor,                  // quatre fois une couleur identique
    LessThanThreeSameColor,         // moins de 3 fois une couleurs
    TwoColorTwoTime,                // 2 fois 2 couleurs identique
    ThreeColors,                    // trois couleurs présentes
    MoreColorThanOtherColor,        // plus de cette couleur que de cette autre couleur
    SameNumberOfTwoColors,          // autant de cette couleur que de cette autre couleur
    NotSameNumberTwoColors,         // nombre différent de ces 2 couleurs
    NotSameNumberThreeColors,       // nombre différent de ces 3 couleurs
    MoreColorThanOtherColorRnd,     // plus de cette couleur que d'une autre couleur
    ColorYam1,
    ColorYam2,
    ColorYam3,
    ColorYam4,
}

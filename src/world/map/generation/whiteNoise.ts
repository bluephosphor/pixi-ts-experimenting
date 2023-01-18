import { randomInt } from "mathjs";
import { CellType } from "../cell";
import { Level } from "../level";
import { LevelGenerationMethod } from "./generation";

export const whiteNoise: LevelGenerationMethod = (level: Level) => {
    for (const cell of level.grid) {
        if (randomInt(0,2) == 1) {
            cell.setType(CellType.WALL);
        }
    }
}
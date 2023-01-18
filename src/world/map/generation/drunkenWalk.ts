import { randomInt } from "mathjs";
import { CellType } from "../cell";
import { Level } from "../level";
import { LevelGenerationMethod } from "./generation";

export const drunkenWalk: LevelGenerationMethod = (level: Level) => {
    level.clear(CellType.WALL);
    
    const iterationCount = 700;
    const changeDirectionChance = 4;
    
    let markerX = Math.floor(level.cols / 2);
    let markerY = Math.floor(level.rows / 2);
    let currentCell = level.getCell(markerX, markerY);
    let influenceX = 0;
    let influenceY = 1;

    const changeDirection = () => {
        switch(randomInt(0,4)){
            case 0: // right
                influenceX = 1;
                influenceY = 0;
                break;
            case 1: // left
                influenceX = -1;
                influenceY = 0;
                break;
            case 2: // up
                influenceX = 0;
                influenceY = -1;
                break;
            case 3: // down
                influenceX = 0;
                influenceY = 1;
                break;
        }
    }
    
    for (let i = 0; i < iterationCount; i++) {
        currentCell?.setType(CellType.FLOOR);
        
        if (randomInt(0, changeDirectionChance) === 0) changeDirection();

        let nextCell = level.getCell(markerX + influenceX, markerY + influenceY);
        while (nextCell === undefined) {
            changeDirection();
            nextCell = level.getCell(markerX + influenceX, markerY + influenceY);
        }
        
        markerX += influenceX;
        markerY += influenceY;
        currentCell = nextCell;
        
    }
}
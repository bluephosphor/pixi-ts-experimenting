import { WIDTH, HEIGHT, CELL_SIZE } from "../../config";
import { Cell, CellType } from "./cell";
import { LevelGenerationMethod } from "./generation/generation";

export class Level {
    
    grid: Cell[];
    cols: number;
    rows: number;
    
    constructor(method?: LevelGenerationMethod){
        this.cols = Math.floor(WIDTH / CELL_SIZE);
        this.rows = Math.floor(HEIGHT / CELL_SIZE);
        this.grid = [];
        this.createMap();
        if (method) method(this);
        console.log(this.grid);
    }

    getCell(x: number, y: number){
        if (x < 0 || y < 0 || x > this.cols - 1 || y > this.rows - 1) {
            return undefined;
        }
        return this.grid[y + x * this.rows];
    }

    createMap(){
        for (let x = 0; x < this.cols; x++){
            for (let y = 0; y < this.rows; y++){
                this.grid.push(new Cell(x, y, CellType.FLOOR));
            }
        }
    }

    clear(type?: CellType){
        for (const cell of this.grid) cell.setType(type ? type : CellType.FLOOR);
    }

}
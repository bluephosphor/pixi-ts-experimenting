import { randomInt } from "mathjs";
import { WIDTH, HEIGHT, CELL_SIZE } from "../../config";
import { Cell, CellType } from "./cell";

export class Level {
    
    grid: Cell[];
    cols: number;
    rows: number;
    
    constructor(){
        this.cols = Math.floor(WIDTH / CELL_SIZE);
        this.rows = Math.floor(HEIGHT / CELL_SIZE);
        this.grid = [];
        this.clear();
        this.generate();
        console.log(this.grid);
    }

    generate(){
        for (const cell of this.grid) {
            if (randomInt(0,2) == 1) {
                cell.resetMask(CellType.WATER);
            }
        }
    }

    clear(){
        for (let x = 0; x < this.cols; x++){
            for (let y = 0; y < this.rows; y++){
                this.grid.push(new Cell(x, y, CellType.FLOOR));
            }
        }
    }

    getCell(x: number, y: number) {
        if (x < 0 || y < 0 || x > this.cols - 1 || y > this.rows - 1) {
            return undefined;
        }
        return this.grid[x + y * this.cols];
    }

    draw(){

    }
}
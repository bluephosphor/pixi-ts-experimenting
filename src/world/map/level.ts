import { WIDTH, HEIGHT, CELL_SIZE } from "../../config";
import { Cell } from "./cell";

export enum CellType {
    FLOOR,
    WALL,
    WATER
}

export class Level {
    
    grid: Cell[];
    cols: number;
    rows: number;
    
    constructor(){
        this.cols = Math.floor(WIDTH / CELL_SIZE);
        this.rows = Math.floor(HEIGHT / CELL_SIZE);
        this.grid = [];
        this.clear();
    }

    generate(){

    }

    clear(){
        for (let x = 0; x < WIDTH; x++){
            for (let y = 0; y < HEIGHT; y++){
                this.grid.push(new Cell(x,y));
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
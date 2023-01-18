import { CELL_SIZE } from "../../config";

export class Cell {
    x: number;
    y: number;
    worldX: number;
    worldY: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
        this.worldX = x * CELL_SIZE;
        this.worldY = y * CELL_SIZE;
    }
}
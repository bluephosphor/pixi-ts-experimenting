import { Graphics } from "pixi.js";
import { Game } from "../..";
import { CELL_SIZE } from "../../config";

export enum CellType {
    FLOOR,
    WALL,
    WATER
}

export const cellTypeToColor = (type: CellType) => {
    switch(type){
        case CellType.WATER:
            return 0x0000ff;
        case CellType.WALL:
            return 0xffffff;
        default:
        case CellType.FLOOR:
            return 0x111111;
    }
}

export class Cell {
    x: number;
    y: number;
    worldX: number;
    worldY: number;
    mask: Graphics;
    type: CellType;
    color: number;
    constructor(x: number, y: number, type: CellType) {
        this.x = x;
        this.y = y;
        this.worldX = x * CELL_SIZE;
        this.worldY = y * CELL_SIZE;
        this.type = type;
        this.color = cellTypeToColor(type);
        this.mask = new Graphics();
        this.mask.x = this.worldX;
        this.mask.y = this.worldY;
        this.resetMask(type);
        Game.stage.addChild(this.mask);
    }

    resetMask(type?: CellType) {
        this.color = (type != undefined) ? cellTypeToColor(type) : 0xff0000;
        this.mask.clear();
        this.mask.beginFill(this.color);
        this.mask.drawRect(this.x, this.y, CELL_SIZE, CELL_SIZE);
    }

    setType(type: CellType){
        this.type = type;
        this.resetMask(type);
    }

}
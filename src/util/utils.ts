export const randomIntRange = (min: number, max: number) => Math.floor(Math.random() * (max - min) ) + min;

export interface Vec2 {
    x: number;
    y: number;
}
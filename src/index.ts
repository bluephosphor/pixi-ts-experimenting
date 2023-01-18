import './style.css'
import { Application } from 'pixi.js';
import { Player } from './world/entities/player';
import { Entities } from './world/entities/entity';
import { Controller } from './meta/controller';
import { WIDTH, HEIGHT } from './config';
import { Level } from './world/map/level';

// game setup

export const Game = new Application({ width: WIDTH, height: HEIGHT });
document.body.appendChild(Game.view);

Controller.init();
const level = new Level();
const player = new Player(64,64);

Game.ticker.add((delta) => {
    level.draw();
    Entities.forEach(e => {
        e.update(); 
        e.draw();
    });
})
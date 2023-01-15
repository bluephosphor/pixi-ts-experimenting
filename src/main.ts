import './style.css'
import { Application } from 'pixi.js';
import Player from './player';
import Entity from './entity';


export const Game = new Application({ width: 480, height: 480 });
document.body.appendChild(Game.view);

const entities = new Set<Entity>();

entities.add(new Player(60,60));
entities.add(new Entity(200,160));

Game.ticker.add((delta) => {
    entities.forEach(e => {
        e.update();
        e.draw();
    })
})
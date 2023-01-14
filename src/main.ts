import './style.css'
import * as PIXI from 'pixi.js';
import Player from './player';


export const app = new PIXI.Application({ width: 480, height: 480 });
document.body.appendChild(app.view);

const player = new Player();

app.stage.addChild(player.sprite);

app.ticker.add((delta) => {
    player.update();
})
import * as PIXI from 'pixi.js';
import Scene from './scene';
import Scene1 from './scene1';

export default class Manager {
  public static game: PIXI.Application;
  public static scene: Scene;
  public static ticker: PIXI.Ticker;

  public static start(options: {
    width: number,
    height: number,
    option: number
  }): void {
    this.game = new PIXI.Application({
      width: options.width,
      height: options.height,
      backgroundColor: options.option
    });
    document.body.appendChild(this.game.view);
    new Scene1(this.scene);
  }
}
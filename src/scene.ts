import * as PIXI from 'pixi.js';
import Manager from './manager';

export default class Scene {
  public container: PIXI.Container;
  public texture: PIXI.Texture[];
  public sprite: PIXI.Sprite[] = [];

  constructor(texture: PIXI.Texture[]) {
    this.container = new PIXI.Container();
    this.texture = texture;
  }

  public static appendScene(scene: Scene) {
    Manager.game.stage.addChild(scene.container);
    for (let i = 0; i < scene.texture.length; i++) {
      scene.sprite[i] = new PIXI.Sprite(scene.texture[i]);
      scene.container.addChild(scene.sprite[i]);
    }
  }

  public static destroyScene(scene: Scene) {
    Manager.ticker = new PIXI.Ticker();
    Manager.ticker.start();
    Manager.ticker.add(() => {
      scene.container.alpha -= 0.05;
      if (scene.container.alpha <= 0) {
        scene.container.destroy();
        Manager.ticker.stop();
      };
    });
    return true;
  }
}
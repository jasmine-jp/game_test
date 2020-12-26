import * as PIXI from 'pixi.js';
import Graphic from './graphic';
import Manager from './manager';
import Scene from './scene';

export default class Scene1Manager {
  public static num: number;

  public static spriteEnableMove(num: number) {
    this.num = num;
    Scene.sprite[num].interactive = true;
    Scene.sprite[num].buttonMode = true;
    Scene.sprite[num].on('pointerdown', Scene1Manager.func1);
    window.addEventListener('pointerup', () => { Scene.sprite[this.num].off('pointermove'); });
  }

  private static func1() {
    Scene.sprite[Scene1Manager.num].on('pointermove', (e: PIXI.InteractionEvent) => {
      if (e.data.getLocalPosition(Manager.game.stage).x > 774) {
        Scene.sprite[Scene1Manager.num].x = 774;
      } else if (e.data.getLocalPosition(Manager.game.stage).x < 374) {
        Scene.sprite[Scene1Manager.num].x = 374;
      } else {
        Scene.sprite[Scene1Manager.num].x = e.data.getLocalPosition(Manager.game.stage).x;
      }
      Graphic.cloneGraphic[0].width = Scene.sprite[Scene1Manager.num].x - Graphic.cloneGraphic[0].x;
    });
  }
}
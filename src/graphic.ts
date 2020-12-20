import * as PIXI from 'pixi.js';
import Scene from './scene';

export default class Graphic {
  private static graphic: PIXI.Graphics[] = [];
  private static container: PIXI.Container[] = [];

  public static appendGraphic(num: number, x: number, y: number, width: number, height: number) {
    this.container[num] = new PIXI.Container();
    if (width >= height) {
      this.graphic[num] = new PIXI.Graphics()
        .beginFill(0xffffff)
        .drawEllipse(height / 4, height / 4, height / 4, height / 4)
        .drawEllipse(width - height / 4, height / 4, height / 4, height / 4)
        .drawEllipse(width - height / 4, height * 3 / 4, height / 4, height / 4)
        .drawEllipse(height / 4, height * 3 / 4, height / 4, height / 4)
        .drawPolygon([
          height / 4, 0,
          width - height / 4, 0,
          width, height / 4,
          width, height * 3 / 4,
          width - height / 4, height,
          height / 4, height,
          0, height * 3 / 4,
          0, height / 4
          ])
        .endFill();
    } else {
      this.graphic[num] = new PIXI.Graphics()
        .beginFill(0xffffff)
        .drawEllipse(width / 4, width / 4, width / 4, width / 4)
        .drawEllipse(width * 3 / 4, width / 4, width / 4, width / 4)
        .drawEllipse(width * 3 / 4, height - width / 4, width / 4, width / 4)
        .drawEllipse(width / 4, height - width / 4, width / 4, width / 4)
        .drawPolygon([
          width / 4, 0,
          width * 3 / 4, 0,
          width, width / 4,
          width, height - width / 4,
          width * 3 / 4, height,
          width / 4, height,
          0, height - width / 4,
          0, width / 4
          ])
        .endFill();
    }
    this.container[num].addChild(this.graphic[num]);
    Scene.container.addChild(this.container[num]);
    this.graphic[num].x = x;
    this.graphic[num].y = y;
  }
}
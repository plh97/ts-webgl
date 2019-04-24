import {
  Engine,
  ArcRotateCamera,
  Vector3,
  Scene,
  HemisphericLight,
  PointLight,
  MeshBuilder
} from "babylonjs";
export default class Game {
  private _canvas: HTMLCanvasElement;
  private _engine: Engine;
  private _scene: Scene;
  private _camera: ArcRotateCamera;
  constructor(canvasElement: HTMLCanvasElement) {
    this._canvas = canvasElement;
    this._engine = new Engine(this._canvas, true);
    this._scene = new Scene(this._engine);
    this._camera = new ArcRotateCamera(
      "Camera",
      Math.PI / 2,
      Math.PI / 2,
      2,
      Vector3.Zero(),
      this._scene
    );
  }
  createScene(): Game {
    this._camera.attachControl(this._canvas, false);
    MeshBuilder.CreateSphere("sphere", {}, this._scene);
    new HemisphericLight("light1", new Vector3(1, 1, 0), this._scene);
    new PointLight("light2", new Vector3(0, 1, -1), this._scene);
    return this;
  }
  animate(): Game {
    this._engine.runRenderLoop(() => this._scene.render());
    return this;
  }
}

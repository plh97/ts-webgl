import {
  Engine,
  ArcRotateCamera,
  Vector3,
  Scene,
  HemisphericLight,
  FreeCamera,
  Mesh
} from "babylonjs";
export default class Game {
  private _canvas: HTMLCanvasElement;
  private _engine: Engine;
  private _scene: Scene;
  private _camera: FreeCamera;
  private _light: HemisphericLight;
  private _sphere: Mesh;
  // private _ground: Mesh;
  constructor(canvasElement: HTMLCanvasElement) {
    this._canvas = canvasElement;
    this._engine = new Engine(this._canvas, true);
    this._scene = new Scene(this._engine);
    this._camera = new FreeCamera(
      "camera1",
      new BABYLON.Vector3(0, 5, -10),
      this._scene
    );
    this._sphere = Mesh.CreateSphere("sphere1", 16, 2, this._scene);
    this._light = new HemisphericLight(
      "light1",
      new BABYLON.Vector3(0, 1, 0),
      this._scene
    );
  }
  createScene(): Game {
    this._camera.setTarget(Vector3.Zero());
    this._camera.attachControl(this._canvas, true);
    this._light.intensity = 0.7;
    this._sphere.position.y = 1;
    // Mesh.CreateGround("ground1", 6, 6, 2, this._scene);
    return this;
  }
  animate(): Game {
    this._engine.runRenderLoop(() => this._scene.render());
    return this;
  }
}

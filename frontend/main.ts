import Game from "./lib/box_box";
// import "./src/index";

window.addEventListener("DOMContentLoaded", initGame);
/**
 *  this funcrtion help us remove canvas element
 *  @returns {void}
 */
function removeExistingCanvas(): void {
  const els: HTMLCollection = document.body.children;
  if (els.length > 0) document.body.removeChild(els.item(0) as Node);
}

/**
 *
 * this function help us remove canvas element and get canvas element
 * @returns {HTMLCanvasElement}
 */
function initCanvas(): HTMLCanvasElement {
  removeExistingCanvas();
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  return canvas;
}

/**
 *  remove canvas and init an scence
 *  @returns {void}
 */
function initGame(): void {
  const canvas = initCanvas();
  const game = new Game(canvas);
  game.createScene().animate();
}

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept(function accept() {
    initGame();
  });
}

import './sass/main.scss';
import Game from './class/Game';

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => Game.resetGame());

Game.getRowsCols().then((data) => {
  let game = new Game(data.rows, data.cols, "game");
});
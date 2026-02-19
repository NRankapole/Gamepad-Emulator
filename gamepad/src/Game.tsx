import { useState } from "react";
import { GameBoard } from "./components/Gameboard/Gameboard";
import { Gamepad } from "./components/Gamepad/Gamepad";
import "./Game.scss"
export type Pos = {
  x: number;
  y: number;
};

const BOARD_SIZE = 8;
const CELL_SIZE = 50;

export default function Game() {
  const [pos, setPos] = useState<Pos>({ x: 0, y: 0 });

  function moveUp() {
   
  }

  function moveDown() {
  }

  function moveLeft() {
  }

  function moveRight() {
  }

  return (
    <div className="gameContainer">
      <GameBoard pos={pos} boardSize={BOARD_SIZE} cellSize={CELL_SIZE} />

      <Gamepad
        onUp={moveUp}
        onDown={moveDown}
        onLeft={moveLeft}
        onRight={moveRight}
      />
    </div>
  );
}

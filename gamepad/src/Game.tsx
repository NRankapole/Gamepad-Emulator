import {  useState } from "react";
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
  const [changeColor, setChangeColor] = useState<boolean>(false);


  //shamelessly from https://www.w3schools.com/graphics/game_movement.asp
  function moveUp() {
    setPos({ x: pos.x, y: Math.max(0, pos.y - 1) });
  }

  function moveDown() {
    setPos({ x: pos.x, y: Math.min(BOARD_SIZE - 1, pos.y + 1) });
  }

  function moveLeft() {
    setPos({ x: Math.max(0, pos.x - 1), y: pos.y });
  }

  function moveRight() {
    setPos({ x: Math.min(BOARD_SIZE - 1, pos.x + 1), y: pos.y });
  }
  
  function handleChange() {
    setChangeColor((state) => !state);
  }
 

  return (
    <div className="gameContainer">
      <GameBoard pos={pos} boardSize={BOARD_SIZE} cellSize={CELL_SIZE} colorProp={changeColor} />

      <Gamepad
        onUp={moveUp}
        onDown={moveDown}
        onLeft={moveLeft}
        onRight={moveRight}
        changeColor={handleChange}
      />
    </div>
  );
}

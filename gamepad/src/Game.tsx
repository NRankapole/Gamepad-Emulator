import {  useEffect, useState } from "react";
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
  setPos((prev) => ({
    x: prev.x,
    y: Math.max(0, prev.y - 1),
  }));
}

function moveDown() {
  setPos((prev) => ({
    x: prev.x,
    y: Math.min(BOARD_SIZE - 1, prev.y + 1),
  }));
}

function moveLeft() {
  setPos((prev) => ({
    x: Math.max(0, prev.x - 1),
    y: prev.y,
  }));
}

function moveRight() {
  setPos((prev) => ({
    x: Math.min(BOARD_SIZE - 1, prev.x + 1),
    y: prev.y,
  }));
}
  function handleChange() {
    setChangeColor((state) => !state);
  }
  
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case "ArrowUp":
          moveUp();
          break;
        case "ArrowDown":
          moveDown();
          break;
        case "ArrowLeft":
          moveLeft();
          break;
        case "ArrowRight":
          moveRight();
          break;
        case " ":
          handleChange(); 
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
   <>
    <h1>Grid Game</h1>
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
   </>
  );
}

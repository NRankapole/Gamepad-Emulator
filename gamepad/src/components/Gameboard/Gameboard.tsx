import type { Pos } from "../../Game"

type Props = {
  pos: Pos;
  boardSize: number;
  cellSize: number;
};

export function GameBoard({ pos, boardSize, cellSize }: Props) {
  return (
    <div
      style={{
        width: boardSize * cellSize,
        height: boardSize * cellSize,
        border: "1px solid black",
      }}
    >
    </div>
  );
}

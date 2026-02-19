import type { Pos } from "../../Game"

type Props = {
  pos: Pos;
  boardSize: number;
  cellSize: number;
  colorProp: boolean;
};

export function GameBoard({ pos, boardSize, cellSize, colorProp }: Props) {
  return (
    <div
      style={{
        width: boardSize * cellSize,
        height: boardSize * cellSize,
        border: "1px solid black",
      }}
    >
        <div
        style={{
          position: "absolute",
          width: cellSize,
          height: cellSize,
          background: colorProp ? "blue" : "red",
          transform: `translate(${pos.x * cellSize}px, ${pos.y * cellSize}px)`,
          transition: "transform 0.1s linear",
        }}
      />
    </div>
  );
}

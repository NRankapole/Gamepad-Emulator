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
        borderRadius: "1rem",
        background: "#2AFC98",
      }}
    >
        <div
        style={{
          position: "absolute",
          width: cellSize,
          height: cellSize,
          background: colorProp ? "#09E85E" : "#214F4B",
           borderRadius: "1rem",
          transform: `translate(${pos.x * cellSize}px, ${pos.y * cellSize}px)`,
          transition: "transform 0.1s linear",
        }}
      />
    </div>
  );
}

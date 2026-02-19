type Props = {
  onUp: () => void;
  onDown: () => void;
  onLeft: () => void;
  onRight: () => void;
};

export function Gamepad({ onUp, onDown, onLeft, onRight }: Props) {
  return (
    <div style={{ marginTop: 20 }}>
      <div>
        <button onClick={onUp}>↑</button>
      </div>

      <div>
        <button onClick={onLeft}>←</button>
        <button onClick={onDown}>↓</button>
        <button onClick={onRight}>→</button>
      </div>
    </div>
  );
}

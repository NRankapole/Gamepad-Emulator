import "./Gamepad.scss"
type Props = {
  onUp: () => void;
  onDown: () => void;
  onLeft: () => void;
  onRight: () => void;
  changeColor: () => void;
};

export function Gamepad({ onUp, onDown, onLeft, onRight, changeColor}: Props) {
  return (
    <div className="buttonContainer">
      <div>
        <button onClick={onUp}>↑</button>
      </div>

      <div>
        <button onClick={onLeft}>←</button>
        <button onClick={onDown}>↓</button>
        <button onClick={onRight}>→</button>
      </div>

    
        <button  onClick={changeColor}>
        changeColor
        </button>
    </div>
  );
}

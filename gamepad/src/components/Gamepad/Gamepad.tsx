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
    <div className="buttonContainer" >
      <div id="topArrow" className="directionButton">
        <button onClick={onUp}>▲</button>
      </div>
      <div id="left-rightArrow" className="directionButton">
        <button onClick={onLeft}>◄</button>
        <button onClick={onRight}>►</button>
      </div>

        <div id="bottomArrow" className="directionButton">
           <button onClick={onDown}>▼</button>
        </div>
       
        <div id="changeColorSection">
          <p>Press to change box color:</p>
          <button id="changeColorButton" onClick={changeColor}>
        Color
        </button>
        </div>
        
    </div>
  );
}

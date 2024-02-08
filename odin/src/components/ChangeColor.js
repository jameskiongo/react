import { useState } from "react";
export default function ChangeColor() {
  const [color, setColor] = useState("#fff000");
  const HandleChange = () => {
    setColor(color + 1);
  };
  const buttonStyle = {
    backgroundColor: color,
    color: "white",
  };
  return (
    <div>
      <h1>{color}</h1>
      <button style={{ buttonStyle }} onClick={HandleChange}>
        ChangeColor
      </button>
    </div>
  );
}

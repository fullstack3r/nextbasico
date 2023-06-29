import { useState } from "react";

const cambiocolor = () => {
  const [numero, setNumero] = useState(1);
  const [color, setcolor] = useState("red");

  return (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      <h1>CambioColor</h1>
    </div>
  );
};

export default cambiocolor;

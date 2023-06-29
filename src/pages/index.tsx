import Azul from "@/components/azul";
import Rojo from "@/components/rojo";
import { useEffect, useState } from "react";

export default function Home() {
  const [numero, setNumero] = useState(1);
  const [espar, setEspar] = useState(false);

  function incrementar() {
    setNumero(numero + 1);
  }

  useEffect(() => {
    if (numero % 2 === 0) setEspar(true);
    else {
      setEspar(false);
    }
  }, [numero]);

  return (
    <div>
      <h1>HOLA</h1>
      <p onClick={incrementar}>incrementar</p>
      <p>es par: {espar.toString()}</p>
      <p>{numero}</p>

      <Rojo />
      <Azul text="pepe" />
    </div>
  );
}

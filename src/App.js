import React, { useState } from "react";
import "./bootstrap.min.css";
import "./App.css";
import Tabela from "./components/tabela";
import AlturaInput from "./components/AlturaInput";
import PesoInput from "./components/PesoInput";
import CalcularBtn from "./components/Calcular-btn";
import Resultado from "./components/ResultadoInput";

export default function App() {
      const [peso, setPeso] = useState(0);
      const [altura, setAltura] = useState(0);
      const [resultado, setResultado] = useState(0);

      const calc = () => {
            setResultado(peso / (altura * altura));
      };

      return (
            <main className="calculadora d-flex flex-column">
                  <PesoInput p={peso} setP={setPeso} />
                  <AlturaInput altura={altura} setAltura={setAltura} />
                  <CalcularBtn func={calc} />
                  <Resultado resultado={resultado} />
                  <Tabela />
            </main>
      );
}

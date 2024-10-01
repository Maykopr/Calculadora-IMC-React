import React, { useState } from "react";
import "./bootstrap.min.css";
import "./App.css";
import Tabela from "./components/Tabela";
import AlturaInput from "./components/AlturaInput";
import PesoInput from "./components/PesoInput";
import CalcularBtn from "./components/Calcular-btn";
import Resultado from "./components/ResultadoInput";

export default function App() {
      const [peso, setPeso] = useState();
      const [altura, setAltura] = useState();
      const [resultado, setResultado] = useState(0);

      const calc = () => {
            setResultado(peso / (altura * altura));
      };

      return (
            <main className="calculadora d-flex flex-column">
                  <PesoInput peso={peso} setPeso={setPeso} />
                  <AlturaInput altura={altura} setAltura={setAltura} />
                  <CalcularBtn func={calc} />
                  <Resultado resultado={resultado} />
                  <Tabela />
            </main>
      );
}

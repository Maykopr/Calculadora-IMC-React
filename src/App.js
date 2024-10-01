import React, { useState } from "react";
import "./bootstrap.min.css";
import "./App.css";
import Tabela from "./components/tabela";
import Altura from "./components/altura";
import Peso from "./components/peso";
import CalcularBtn from "./components/Calcular-btn";
import Resultado from "./components/resultado";

export default function App() {
      const [peso, setPeso] = useState(0);
      const [altura, setAltura] = useState(0);
      const [resultado, setResultado] = useState(0);

      const calc = () => {
            setResultado(peso / (altura * altura));
      };

      return (
            <main className="calculadora d-flex flex-column">
                  <Peso p={peso} setP={setPeso} />
                  <Altura a={altura} setA={setAltura} />
                  <CalcularBtn func={calc} />
                  <Resultado r={resultado} />
                  <Tabela />
            </main>
      );
}

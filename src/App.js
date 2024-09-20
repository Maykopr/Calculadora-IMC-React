import React, { useState } from "react";
import "./bootstrap.min.css";
import "./App.css";
import Tabela from "./components/tabela";
import Altura from "./components/altura";
import Peso from "./components/peso";
import Calcular from "./components/calcular";
import Resultado from "./components/resultado";

export default function App() {
      const [peso, setPeso] = useState(0);
      const [altura, setAltura] = useState(0);
      const [resultado, setResultado] = useState(0);

      return (
            <main class="calculadora d-flex flex-column">
                  <Peso p={peso} setP={setPeso} />
                  <Altura a={altura} setA={setAltura} />
                  <Calcular a={altura} p={peso} setR={setResultado} />
                  <Resultado r={resultado} />
                  <Tabela />
            </main>
      );
}

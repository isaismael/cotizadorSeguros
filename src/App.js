import react, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";

import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const Contenedorformulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;


function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year:'',
      plan:''
    }
  });

  // Extraer datos
  const {datos} = resumen;

  return (
    <Contenedor>
      <Header
        titulo='Cotizador de Seguros'
      />
      <Contenedorformulario>
        <Formulario
          guardarResumen = {guardarResumen}
        />
        <Resumen
         datos={datos}
        />

      </Contenedorformulario>
    </Contenedor>
  );
}

export default App;

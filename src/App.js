import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {
  /* ------------- STATES ------------- */
  const [ubicacion, buscarUbicacion] = useState({
    ciudad: "",
    pais: "",
  });

  const [consultar, setConsultar] = useState(false);
// DESTRUCTURA
  const {ciudad, pais} = ubicacion;
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);


useEffect(() => {
  const consultarAPI = async () => {

  if(consultar) {
    const miApiKey = "1df5e53d2f3a2424902e14b5409d5d9a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${miApiKey}`;

        const consulta = await fetch(url)
        const respuesta = await consulta.json();

        guardarResultado(respuesta)
        setConsultar(false)
      }
    }
    
    if(resultado.cod === "404") {
      guardarError(true)
    } else {
      guardarError(false)
    }
    consultarAPI()
    // eslint-disable-next-line
  }, [consultar])

  // Esta variable "componente lo que hace es guardar el componente que pase dicha condicion!
  let componente;
    error ? componente = <Error estilo="red darken-4 error" mensaje="No logramos identificar el pais"/> 
    : componente = <Clima resultado={resultado}/>

  return (
    <div className="App">
      {/* Esto es props.children */}
      <Header>React Clima</Header>

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                ubicacion={ubicacion}
                buscarUbicacion={buscarUbicacion}
                setConsultar={setConsultar}
              />
            </div>

            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

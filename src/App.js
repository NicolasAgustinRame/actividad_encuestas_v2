import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import CrearEncuesta from "./componentes/CrearEncuesta";
import Encuesta from "./componentes/Encuesta";
import Menu from './componentes/Menu'; // Importa el componente Menu
import NotFound from './componentes/NotFound'; // Importa el componente Menu
import encuestas from './data/encuestas.json'
function App() {
  const [listaEncuestas, setListaEncuestas] =
    useState(encuestas);
  const agregarEncuesta = (nuevaEncuesta) => {
    nuevaEncuesta.id = listaEncuestas.length + 1
    setListaEncuestas([...listaEncuestas, nuevaEncuesta]);
  };
  const responderEncuesta = (id, respuestas) => {
    const encuesta = listaEncuestas.find(enc => enc.id ===
      parseInt(id));
    encuesta.respuestas = [respuestas];
  };
  return (
    <BrowserRouter>
      <Menu /> {/* Agrega el menú de navegación */}
      <Routes>
        <Route path="/" element={<Inicio
          listaEncuestas={listaEncuestas} />} />
        <Route path="/encuesta/crear" element={<CrearEncuesta
          agregarEncuesta={agregarEncuesta} />} />
        <Route path="/encuesta/:id" element={<Encuesta
          listaEncuestas={listaEncuestas}
          responderEncuesta={responderEncuesta} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

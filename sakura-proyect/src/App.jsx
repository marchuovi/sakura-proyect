import Inicio from './components/Inicio';
import Home from './components/Home';
import Destino from './components/Destino'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Inicio />} />
        <Route path='home' element={<Home />} />
        <Route path="destino" element={<Destino />} />
      </Routes>
    </>
  );
}

export default App

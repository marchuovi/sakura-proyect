import Home from './components/Home';
import Lecture from './components/Lecture';
import Destino from './components/Destino';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="lecture" element={<Lecture />} />
        <Route path="destino" element={<Destino />} />
      </Routes>
    </>
  );
}

export default App

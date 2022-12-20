import Home from './components/Home';
import Lecture from './components/Lecture';
import Destine from './components/Destine';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="lecture" element={<Lecture />} />
        <Route path="destine" element={<Destine />} />
      </Routes>
    </>
  );
}

export default App

import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SingleMovie from "./pages/SingleMovie";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </div>
  );
}

export default App;
